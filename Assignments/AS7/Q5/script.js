// Question 5: Print the Odds.

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter a number: "));

function Print_Odd(N) {
    console.log(2);

    for (let i = 3; i <= N; i += 2) {
        console.log(i);
    }
}

Print_Odd(N);