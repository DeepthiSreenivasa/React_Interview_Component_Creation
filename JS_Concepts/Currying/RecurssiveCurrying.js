function sum(x) {
    return function (y) {
        if (!y) {
            return x;
        }
        return sum(x + y)
    }
}

let ans = sum(3)(4)(8)();
console.log("ans::", ans);
