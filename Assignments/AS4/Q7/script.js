// Question 7: Increment the Array Elements

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the size of the array: "));
let arr = [];

console.log("Enter the array elements:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function Inc_Arr(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
    }

    return arr;
}

console.log("Updated Array:", Inc_Arr(arr));