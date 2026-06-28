// Question 9: Reverse the String

function Reverse_String(S) {
    let rev = "";

    for (let i = S.length - 1; i >= 0; i--) {
        rev += S[i];
    }

    return rev;
}

console.log(Reverse_String("I am Anvesha"));