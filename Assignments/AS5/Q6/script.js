// Question 6: Object Multiplyer

function Multiply(obj, N) {
    obj.id *= N;
    obj.houseno *= N;
    return obj;
}

let obj = {
    id: 12,
    houseno: 146
};

let result = Multiply(obj, 2);

console.log(result);