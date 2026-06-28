// Question 8: Pass or Fail

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the number of students: "));
let arr = [];

console.log("Enter marks:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function isAllPass(N, arr) {

    for (let i = 0; i < N; i++) {

        if (arr[i] < 32) {
            return "NO";
        }
    }

    return "YES";
}

console.log(isAllPass(N, arr));