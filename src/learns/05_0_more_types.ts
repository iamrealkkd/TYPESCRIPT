let response: any = "42";

let numericlength:number = (response as string).length

type Book = {
    name: string;
};

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject);
const inputElemnt = document.getElementById("username")as HTMLInputElement;

let value:any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue:unknown;

newValue = "chai"
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase(); error aayege isme because unknown use hua hai
if(typeof newValue == "string"){
    newValue.toUpperCase();
}

try{

}catch(error: any){
    if(error instanceof Error){
    console.log(error.message);
    }
    console.log("Error", error);
}

const data:unknown = "chai aur code";
const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function rdbaseonrole(role: Role): void{
     if(role == "admin"){
        console.log("Redirecting to admin");
        return;
     }
     if(role == "user"){
        console.log("Redirecting to user");
        return;
     }
     role;//hover on it, it is now superadmin
}
function neverReturn(): never{
    while(true){
        
    }
}