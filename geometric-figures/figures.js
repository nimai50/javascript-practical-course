//code of the square
console.group("Square");

function squarePerimeter(sideMesure) {
    return sideMesure * 4;
}

function squareArea(sideMesure) {
    return sideMesure * sideMesure;
}

console.groupEnd();

//code of the triangle
console.group("Triangle");

const triangleHeight = 5.5;

function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

console.groupEnd();

//code of the circle
console.group("Circle");

function circleDiameter(radius) {
    return radius * 2;
}

//circumference
function circleCircumference(radius) {
    return circleDiameter(radius) * Math.PI;
}

circleArea = function (radius) {
    return Math.PI * (radius * radius);
}

//area
console.groupEnd();
