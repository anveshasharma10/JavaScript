// Question 6: Find the Winner

function Game_Winner(S) {
    let A = 0;
    let D = 0;

    for (let ch of S) {
        if (ch === "A") A++;
        else if (ch === "D") D++;
    }

    if (A > D) return "Aditya";
    else if (D > A) return "Adya";
    else return "Draw";
}

console.log(Game_Winner("ADDAAADDDDD"));
console.log(Game_Winner("ADDAAADD"));
