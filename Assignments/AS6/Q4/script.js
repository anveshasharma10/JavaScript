// Question 4: Reverse a Number.

function Reverse_Number(N) {
    let rev = 0;

    while (N > 0) {
        rev = rev * 10 + (N % 10);
        N = Math.floor(N / 10);
    }

    return rev;
}
console.log(Reverse_Number(2012)); 