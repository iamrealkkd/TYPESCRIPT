const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice:number[] = [10, 20];

const rating: Array<number> = [4.5, 5.8];

type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "Adrak", price: 30},
]
menu.push({name: "Lahsun", price: 80});

const cities: readonly string[] = ["Delhi", "Mumbai"];//readonly values can't be manupilated

// cities.push("Pune");will give error

const table: number [][] = [
    [1, 2, 3],
    [4, 5, 6]
]

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Massss"] isme order important hai pehle jo order hai wahi aana chiye these are called tuples

let userInfo: [string, number, boolean?]
userInfo = ["Hitesh", 20, false]
userInfo = ["Hitesh", 20]

//readonlytuples
const location: readonly [number, number] = [26, 78];
const ChaiItems: [name: string, price:number] = ["Masala", 25]

//enums

enum CupSize {
    SMALL,
    MEDIUM, 
    LARGE
}

const size = CupSize.LARGE;

enum Status {
    PENDING = 100,
    SERVED,// 101 AUTO INCREMENTAL VALUE
    CANCELLED// 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType) {
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);
//ENUM KO EK DATA-TYPE RKHNE KA TRY KRO IT'S A GOOD PRACTICE
