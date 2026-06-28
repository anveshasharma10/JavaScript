// Question 5: Merge the Objects

function MergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

let obj1 = {
    name: "Anvesha",
    id: 46
};

let obj2 = {
    state: "Ghaziabad",
    code: 201002
};

let result = MergeObjects(obj1, obj2);

console.log(result);