"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericlength = response.length;
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElemnt = document.getElementById("username");
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase(); error aayege isme because unknown use hua hai
if (typeof newValue == "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "chai aur code";
const strData = data;
function rdbaseonrole(role) {
    if (role == "admin") {
        console.log("Redirecting to admin");
        return;
    }
    if (role == "user") {
        console.log("Redirecting to user");
        return;
    }
    role; //hover on it, it is now superadmin
}
function neverReturn() {
    while (true) {
    }
}
//# sourceMappingURL=05_0_more_types.js.map