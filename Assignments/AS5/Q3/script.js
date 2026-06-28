// Question 3: Check whether the Package is Dream Package or not.

function CheckDreamPackage(obj) {
    if (obj.salary > 500000) {
        return "Dream";
    } else {
        return "Not Dream";
    }
}

let obj = {
    salary: 100000
};

console.log(CheckDreamPackage(obj));
