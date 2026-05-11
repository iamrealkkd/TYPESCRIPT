"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind == "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai Order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
function orderChai(size) {
    if (size == "small") {
        return `small cutting chai....`;
    }
    if (size == 'medium' || size == "large") {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}
class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}
class Cutting {
    serve() {
        return `Serving Cutting Chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
// ===============================
// TYPE NARROWING IN TYPESCRIPT
// ===============================
// Type narrowing means:
// TypeScript automatically ya manually
// kisi variable ka exact type identify karta hai.
// Example:
// let value: string | number;
// value = "Krishna";
// value = 10;
// value dono ho sakta hai:
// string bhi aur number bhi
// Narrowing ke baad TypeScript samajhta hai
// ki current block me actual type kya hai
//# sourceMappingURL=04_0_type_narrowing.js.map