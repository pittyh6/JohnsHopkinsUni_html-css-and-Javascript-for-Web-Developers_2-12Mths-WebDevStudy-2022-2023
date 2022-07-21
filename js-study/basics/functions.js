//functions are first classes data type
function multiply(a, b) {
    return a * b;
}
//function are objects
multiply.version = "v.1.0.0"; 

console.log(multiply.version)
console.log(multiply(3,5))


//function factory
function makeMultiplier(multiplier){
    let myFunc = function(x){
        return multiplier * x;
    };
    return myFunc;
}
let multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
let doubleAll = makeMultiplier(2);
console.log(doubleAll(100))


//passing functions as arguments
function doOperationOn(x, operation){
    return operation(x);
}
let result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);