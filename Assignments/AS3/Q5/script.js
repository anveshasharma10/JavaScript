// Question 5: Find Length

function findLength(S) {
    let count = 0;

    for (let ch of S) {
        count++;
    }

    return count;
}

console.log(findLength("CeDqe"));