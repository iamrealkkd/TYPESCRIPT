interface Chai{
    flavour: string;
    price: number;
}

const masala: Chai = {
    flavour: "Masala",
    price: 30
}

interface Shop {
    readonly id : number;
    name: string;
}

const s: Shop = {id: 1, name: "ChaiCodeCafe"}
// s.id = 2

interface DiscCalc{
    (price: number): number
}

const apply50: DiscCalc = (p) => p * 0.5

interface Teacmachine{
    start(): void;
    stop(): void
}

const machine: Teacmachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

interface ChaiRatings {
    [flavor: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5
}

interface User {
    name: string;
}
interface User {
    age: number;
}

const u: User = {
    name:"Krishna",
    age: 20
}

interface A {a: string}
interface B {b: string}

interface C extends A, B{}


//Generics

function wrapInarray<T>(item: T): T[]{
    return [item]
}

wrapInarray("masala")
wrapInarray(42)
wrapInarray({flavour: "Ginger"})

function pair<A, B>(a: A, b: B):[A, B]{
    return [a , b]
}

pair("masala", 20)
pair("masala", {flavour: "Ginger"})

interface Box<T>{
    content: T
}

const numberBox: Box<number> = {
    content:10
}
const numberBoxCup: Box<string> = {
    content:"10"
}

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}