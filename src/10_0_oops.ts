// class Chai {
//     flavour: string;
//     price: number;

//     constructor(flavour: string, price: number) {
//         this.flavour = flavour;
//         this.price = price;
//     }
// }

// const masalaChai = new Chai("Ginger", 20);
// masalaChai.flavour = "masala"
// class Chai {
//     flavour: string;

//     constructor(flavour: string) {
//         this.flavour = flavour;
//         console.log(this);
//     }
// }

// const masalaChai = new Chai("Ginger");
// masalaChai.flavour = "masala"

// console.log(masalaChai.flavour);

// PUBLIC + PRIVATE + PROTECTED + READONLY + #PRIVATE FIELD

class Chai {
    // public -> accessible everywhere
    public flavor: string = "Masala";

    // private -> accessible only inside class
    private secretIngredients: string = "Cardamom";

    // protected -> accessible inside class + child classes
    protected shopName: string = "Chai Corner";

    // method accessing private variable
    reveal(): string {
        return this.secretIngredients;
    }

    // method accessing protected variable
    getShopName(): string {
        return this.shopName;
    }
}

const c = new Chai();

console.log(c.flavor); // OK

console.log(c.reveal()); // OK

console.log(c.getShopName()); // OK

// console.log(c.secretIngredients); // Error
// console.log(c.shopName); // Error



// ==========================================
// PROTECTED WITH INHERITANCE
// ==========================================

class Shop {
    protected shopName: string = "Chai Corner";
}

class Branch extends Shop {

    getName(): string {
        return this.shopName;
    }
}

const b = new Branch();

console.log(b.getName());

// console.log(b.shopName); // Error



// ==========================================
// REAL JAVASCRIPT PRIVATE FIELD (#)
// ==========================================

class Wallet {

    #balance: number = 100;

    getBalance(): number {
        return this.#balance;
    }
}

const w = new Wallet();

console.log(w.getBalance());

// console.log(w.#balance); // Error



// ==========================================
// READONLY
// ==========================================

class Cup {

    readonly capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

const cup = new Cup(250);

console.log(cup.capacity);

// cup.capacity = 500; // Error

class ModernChai {

    // private property
    private _sugar = 2

    // getter
    get sugar() {
        return this._sugar
    }

    // setter
    set sugar(value: number) {

        // validation
        if (value > 5) {
            throw new Error("Too sweet")
        }

        this._sugar = value
    }
}


// object create
const chai = new ModernChai()

// getter call
console.log(chai.sugar)  
// Output: 2


// setter call
chai.sugar = 4

console.log(chai.sugar)
// Output: 4


// error
chai.sugar = 10

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}
console.log(EkChai.shopName);