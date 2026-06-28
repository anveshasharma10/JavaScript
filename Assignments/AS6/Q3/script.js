// Question 3: Perfect Number Check.

function Perfect_Check(N) {
    let sum = 0;

    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            sum += i;
        }
    }

    if (sum === 2 * N) {
        return "YES";
    } else {
        return "NO";
    }
}
console.log(Perfect_Check(96345));     
