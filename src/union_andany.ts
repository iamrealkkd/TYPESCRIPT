// subs can be number OR string
// backticks ki zarurat nahi hai yahan
let subs: number | string = '1M';

// Custom Modes (Union Literal Types) and default value Pending daali gyi
let apiRequestStatus: 'Pending' | 'Success' | 'Error' = 'Pending';

// apiRequestStatus = "Done"; not possible ❌ (type me nahi hai)
apiRequestStatus = 'Success'; // correct value assign ki

// limited seat options
let airLineSeat: 'aisle' | 'window' | 'middle' = 'aisle';
airLineSeat = 'aisle'; // same value dubara assign karna allowed hai

// orders array
const orders = ['12', '20', '28', '42'];


let currentOrder: string | undefined; //let currentOrder: any avoid kro kuch bhi value store ho skti hai

// loop through orders
// NOTE: variable name change kiya (order -> o) to avoid confusion
for (let o of orders) {
    if (o === '28') { // strict equality use ki
        currentOrder = o;
        break;
    }
}


console.log(currentOrder); // '28' print hoga