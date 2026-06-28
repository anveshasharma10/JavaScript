//  Question 1: Find the Smaller Angle

function Minimal_Angle(h, m) {
    let hourAngle = (h % 12) * 30 + m * 0.5;
    let minuteAngle = m * 6;

    let angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}

console.log(Minimal_Angle(5, 30)); 
