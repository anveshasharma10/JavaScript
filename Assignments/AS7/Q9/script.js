// Question 9: Print the Table

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter a number: "));

function Print_Table(N) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${N} * ${i} = ${N * i}`);
    }
}

Print_Table(N);