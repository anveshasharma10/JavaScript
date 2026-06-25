// Question 4: Second Smallest

function findSndSmallest(X, Y, Z) {
    let arr = [X, Y, Z];
    arr.sort((a, b) => a - b);
    return arr[1];
}

console.log(findSndSmallest(2, 9, 23));  