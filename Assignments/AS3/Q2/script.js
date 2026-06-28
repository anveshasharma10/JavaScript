// Question 2: Count the Heads


function Count_Head(S) {
    let freq = {};

    for (let ch of S) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let ans = "";

    let keys = Object.keys(freq).sort();

    for (let ch of keys) {
        if (freq[ch] > 1) {
            ans += ch + freq[ch];
        }
    }

    return ans;
}

console.log(Count_Head("prepbytes"));