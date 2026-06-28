// Question 3: Count the Vowels

function Count_Vowel(S) {
    let count = 0;

    for (let ch of S) {
        if ("aeiouAEIOU".includes(ch)) {
            count++;
        }
    }

    return count;
}

console.log(Count_Vowel("Prepbytes"));