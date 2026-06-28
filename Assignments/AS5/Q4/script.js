// Question 4: Check whether the Object has a parameter or not

function Check(obj) {
    if (Object.keys(obj).length === 0) {
        return "false";
    } else {
        return "true";
    }
}

let obj = {
    name: "Anvesha"
};

console.log(Check(obj));