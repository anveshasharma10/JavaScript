// Question 2: Check whether the year is Leap year or not.

function Check_Leap(N) {
    if ((N % 400 === 0) || (N % 4 === 0 && N % 100 !== 0)) {
        return "Leap Year";
    } else {
        return "Non Leap Year";
    }
}
console.log(Check_Leap(2012)); 