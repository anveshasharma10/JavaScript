// Question 2: Delete a Parameter

function DeleteParameter(obj) {
    delete obj.rollno;
    return obj;
}

let obj = {
    name: "Anvesha",
    rollno: 46
};

DeleteParameter(obj);

console.log(obj);
console.log(obj.hasOwnProperty("rollno"));