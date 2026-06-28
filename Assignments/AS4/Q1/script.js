// Question 1: Find the Product.

const prompt = require("prompt-sync")();

let N = Number(prompt("Enter the size of the array: "));
let arr = [];

console.log("Enter the array elements:");

for (let i = 0; i < N; i++) {
    arr.push(Number(prompt()));
}

function Find_Prod(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    return product;
}

console.log("Product =", Find_Prod(arr));