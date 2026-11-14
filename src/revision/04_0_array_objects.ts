let hobbies = ['Chess', 'CP'];
// hobbies.push(10); will give error beacuse initially it was string type array
// let users: (string | number)[];
let users: Array<(string | number)>;
users = [1, 'Krishna'];
users = [5, 1];
users = ['MAx', 'Krishna'];