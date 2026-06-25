// Question 2: Get Value

function getValue(C) {
    switch (C) {
        case 'P':
        case 'p':
            return "PrepBytes";

        case 'Z':
        case 'z':
            return "Zenith";

        case 'E':
        case 'e':
            return "Expert Coder";

        case 'D':
        case 'd':
            return "Data Structure";
    }
}
console.log(getValue('E'));