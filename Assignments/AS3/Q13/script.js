// Question 13: Count the Vowels and Consonants

function Count_Vowels(S) {
    let count = 0;

    for (let ch of S) {
        if ("aeiouAEIOU".includes(ch)) {
            count++;
        }
    }

    return count;
}

function Count_Consonants(S) {
    let count = 0;

    for (let ch of S) {
        if (
            /[a-zA-Z]/.test(ch) &&
            !"aeiouAEIOU".includes(ch)
        ) {
            count++;
        }
    }

    return count;
}

console.log(Count_Vowels("Prepbytes"));
console.log(Count_Consonants("Prepbytes"));