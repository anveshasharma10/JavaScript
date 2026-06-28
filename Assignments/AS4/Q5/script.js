// Question 5: Find whether the number is present or not

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the size of the array: "));
let arr = [];

console.log("Enter the array elements:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

let M = Number(prompt("Enter the number to search: "));

function Find_Num(arr, M) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === M) {
            return "YES";
        }
    }

    return "NO";
}

console.log(Find_Num(arr, M));