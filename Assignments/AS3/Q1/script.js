// Question 1: Count Characters

function countCharacters(S) {
    let A = 0, D = 0;

    for (let ch of S) {
        if (ch === "A") A++;
        if (ch === "D") D++;
    }

    return [A, D];
}

console.log(countCharacters("AbaDd"));