const obj = require("././sum");
const obj1 = require("././mul_div");

let total = obj?.sum?.(1000, 777777);
console.log("total", total);

let subtraction = obj?.x?.(100,50);
console.log("subtraction is ", subtraction);

let multipication = obj1?.mul?.(100,50);
console.log("multipication is ", multipication);

let division = obj1?.div?.(100,50);
console.log("division is ", division);

