// Question 7: Check whether a Number is a prime or not.

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter a number: "));

function Prime_Check(N) {
    if (N <= 1) {
        return "NO";
    }

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return "NO";
        }
    }

    return "YES";
}

console.log(Prime_Check(N));