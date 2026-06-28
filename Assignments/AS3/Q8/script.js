// Question 8: Plaindrome Check

function Plain_Check(S) {
    let rev = "";

    for (let i = S.length - 1; i >= 0; i--) {
        rev += S[i];
    }

    if (S === rev)
        return "True";
    else
        return "False";
}

console.log(Plain_Check("Naman"));
console.log(Plain_Check("naman"));
