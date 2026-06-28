// Question 8: Print Numbers

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter a number: "));

function printNumbers(N) {
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}

printNumbers(N);