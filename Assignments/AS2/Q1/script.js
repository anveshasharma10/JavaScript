// Question 1: Find Grades

function findGrades(M) {
    switch (true) {
        case (M >= 0 && M <= 10):
            return "E";

        case (M >= 11 && M <= 20):
            return "D";

        case (M >= 21 && M <= 30):
            return "C";

        case (M >= 31 && M <= 40):
            return "B";

        case (M >= 41 && M <= 50):
            return "A";
    }
}

console.log(findGrades(1));

