// Question 1: Create a Function

function setter(obj) {
    obj.setter = function () {
        console.log(this.name);
    };
}

let obj = {
    name: "Anvesha"
};

setter(obj);
obj.setter();