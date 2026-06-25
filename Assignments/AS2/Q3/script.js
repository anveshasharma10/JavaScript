// Question 3: Find the maximum out of three numbers.

function Max_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;
    }

    return Math.max(A, B, C);
}

console.log(Max_out_of_three(2, 5, 4));   