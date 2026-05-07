let drink = "Cold Drink";
let cups = Math.random() > 0.5 ? 10 : 5;
//two types of error: syntax error and type error
let channelName: string
// channelName = 123; will not work because it is assigned to string
let chaiflav: string = "Ginger";
chaiflav = "normal";// override the ginger to normal
// chaiflav = 2; not possible
console.log(chaiflav);

let chaiorder: boolean;