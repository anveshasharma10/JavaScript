// Question 4: Find the sum of the digits of a given number.

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter a number: "));

function Number_Sum(N) {
    let sum = 0;

    while (N > 0) {
        sum += N % 10;
        N = Math.floor(N / 10);
    }

    return sum;
}

console.log("Sum of digits =", Number_Sum(N));