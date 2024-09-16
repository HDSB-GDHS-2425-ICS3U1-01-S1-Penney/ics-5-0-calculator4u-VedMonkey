// NAME: Dylan Kellogg
// DATE: September 16 2024
// TITLE: Calculator

// Function that gives instructions, asks for numbers/operation, does the operation inputted and logs the result
function main() {
    console.log("Instructions: Add = +, Subtract = -, Multiply = *, Divide = /, Power Of = ^, SqaureRoot = $, Sin = s, Cos = c, and Tan = t");
    x = Number(prompt ("First Number:"));
    operator = prompt ("Operation:");
    y = Number(prompt ("Second Number:"));
    if (operator =="+") {
        result = add();
    } else if (operator == "-") {
        result = subtract();
    } else if (operator == "*") {
        result = multiply();
    } else if (operator == "/") {
        result = divide();
    } else if (operator == "^") {
        result = sqaure();
    } else if (operator == "$") {
        result = sqaureRoot();
    } else if (operator == "s") {
        result = sin();
    } else if (operator == "c") {
        result = cos();
    } else if (operator == "t") {
        result = tan();
    }
    console.log(result)
}
// Creating the functions that add/subtract/multiply/divide/sqaure/sqaureroot/trig functions 
function add() {
    return x+y;
}
function subtract() {
    return x-y;
}
function multiply() {
    return x*y;
}
function divide() {
    return x/y;
}
function sqaure() {
    return Math.pow (x , y);
}
function sqaureRoot() {
    return Math.sqrt(x);
}
function sin() {
    return Math.sin(x);
}
function cos() {
    return Math.cos(x);
}
function tan() {
    return Math.tan(x);
}
// Calling the first fuction to run the calculator
main()