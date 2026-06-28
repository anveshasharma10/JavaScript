// Question 8: Check whether the Objects are same or not.

function Check(obj, new_name, new_id) {
    if (obj.name === new_name && obj.id === new_id) {
        return "true";
    } else {
        return "false";
    }
}

let obj = {
    name: "Anvesha",
    id: 2
};

console.log(Check(obj, "Prepbytes", 3));
console.log(Check(obj, "Anvesha", 2));