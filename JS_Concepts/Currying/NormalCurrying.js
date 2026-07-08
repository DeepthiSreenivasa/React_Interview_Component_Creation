let sum = function (x) { //create a function
    return function (y) { //return a function
        return x + y; //return a value
    }
}

let x = sum(3)(4);
console.log("X::", x);
