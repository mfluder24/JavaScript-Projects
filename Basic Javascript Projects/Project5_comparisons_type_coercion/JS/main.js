document.write(typeof 433); //displaying data type 
document.write("<br>"); //displaying a break

document.write("2" + 4); //displaying result with type coercion
document.write('<br>'); //displaying a break

document.write(24>7); //displaying result of Boolean operator
document.write('<br>'); //displaying a break

document.write(24<7); //displaying result of Boolean operator
document.write('<br>'); //displaying a break

document.write(24==24); //displaying result of equality operator
document.write('<br>'); //displaying a break

document.write(24==999); //displaying result of equality operator
document.write('<br>'); //displaying a break

var X = 24; //defining a variable and giving it a number value
var A = 24; //defining a variable and giving it a number value
var R = "24"; //defining a variable and giving it a string value
var N = 42; //defining a variable and giving it a number value
var C = "Smoke"; //defining a variable and giving it a string value
document.write(X===A); //displaying result of strict equality operator
document.write('<br>'); //displaying a break

document.write(X===R); //displaying result of strict equality operator
document.write('<br>'); //displaying a break

document.write(X===N); //displaying result of strict equality operator
document.write('<br>'); //displaying a break

document.write(X===C); //displaying result of strict equality operator
document.write('<br>'); //displaying a break

document.write(24>10 && 42>24); //displaying result of AND operator
document.write('<br>'); //displaying a break
document.write(24<10 && 42>24); //displaying result of AND operator
document.write('<br>'); //displaying a break

document.write(24>10 || 42<24); //displaying result of OR operator
document.write('<br>'); //displaying a break
document.write(24<10 || 42<24); //displaying result of OR operator
document.write('<br>'); //displaying a break


console.log(17*2); //using console.log method to display result of math equation
console.log(17>24); //using console.log method to display result of math equation

function func1() { //Defining a function and giving it a name
    document.getElementById("Nan").innerHTML = 0/0; //purposely making NaN display in the HTML elementFromPoint with "Nan" id 
}

function func3() { //Defining a function and giving it a name
    document.getElementById("Lies").innerHTML = isNaN('432'); //using isNaN function in the HTML elementFromPoint with "Lies" id 
}

function func2() { //Defining a function and giving it a name
    document.getElementById("Yas").innerHTML = isNaN('Stringy string string'); //using isNaN function in the HTML elementFromPoint with "Yas" id 
}

function func4() { //Defining a function and giving it a name
    document.getElementById("Inf").innerHTML = 2E310; //making infinity display in the HTML elementFromPoint with "Inf" id 
}

function func5() { //Defining a function and giving it a name
    document.getElementById("Neg").innerHTML = -2E310; //making -infinity display in the HTML elementFromPoint with "Neg" id 
}

function notFunc1() { //Defining a function and giving it a name
    document.getElementById("Not1").innerHTML=!(20>10); //using NOT function in the HTML elementFromPoint with "Not1" id 
}

function notFunc2() { //Defining a function and giving it a name
    document.getElementById("Not2").innerHTML=!(5>10); //using NOT function in the HTML elementFromPoint with "Not2" id 
}
