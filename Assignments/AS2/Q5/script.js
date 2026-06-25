// Question 5: Check whether the triangle is Acute or Obtuse

function Triangle_Check(A, B, C) {
    if (A > 90 || B > 90 || C > 90) {
        return "obtuse";
    } else {
        return "acute";
    }
}
console.log(Triangle_Check(60, 60, 60)); 
