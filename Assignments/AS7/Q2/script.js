// Question 2: Find the Fives.

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter a number: "));

function Find_Five(N) {
    let count = 0;

    while (N > 0) {
        if (N % 10 === 5) {
            count++;
        }
        N = Math.floor(N / 10);
    }

    return count;
}

console.log("Number of 5s =", Find_Five(N));