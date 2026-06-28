// Question 7: Find the sum of Object Members

function Check(obj) {
    return obj.p1 + obj.p2 + obj.p3;
}

let obj = {
    p1: 1,
    p2: 2,
    p3: 3
};

console.log(Check(obj));