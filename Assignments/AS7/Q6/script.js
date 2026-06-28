// Question 6: Print the Pattern.

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter number of rows: "));

function Print_pattern(N) {
    for (let i = 1; i <= N; i++) {
        console.log("*".repeat(i));
    }
}

Print_pattern(N);