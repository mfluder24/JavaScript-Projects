window.alert(Math.random() * 100); //Creating a popup alert with a random number 1-100

function addFunc() { //defining a function and giving it a name
    var addition = 20 + 4; //defining a variable and giving it numbers and an operator
    document.getElementById("Add").innerHTML="2 + 2 = " + addition; //placing value of variable and string into HTML elementFromPoint with "Add" id 
}

function subFunc() { //defining a function and giving it a name
    var subtraction = 44 - 2; //defining a variable and giving it numbers and an operator
    document.getElementById("Subt").innerHTML="5 - 2 = "+subtraction; //placing value of variable and string into HTML elementFromPoint with "Subt" id 
}

function multFunc() { //defining a function and giving it a name
    var multiply = 7 * 3; //defining a variable and giving it numbers and an operator
    document.getElementById("Mult").innerHTML="7 x 3 = "+multiply //placing value of variable and string into HTML elementFromPoint with "Mult" id 
}

function divFunc() { //defining a function and giving it a name
    var divide = 18 / 9; //defining a variable and giving it numbers and an operator
    document.getElementById("Divi").innerHTML="18 / 9 = "+divide //placing value of variable and string into HTML elementFromPoint with "Divi" id 
}

function mathFunc() { //defining a function and giving it a name
    var maths = (20 + 4) * 70 / 2 - 16; //defining a variable and giving it numbers and operators
    document.getElementById("Math").innerHTML="20 + 4 x 70 / 2 - 16 = "+maths //placing value of variable and string into HTML elementFromPoint with "Math" id 
}

function moduFunc() { //defining a function and giving it a name
    var modulus = 17 % 2; //defining a variable and giving it numbers and an operator
    document.getElementById("Modu").innerHTML="When you divide 17 by 2 you have a remainder of: "+modulus //placing value of variable and string into HTML elementFromPoint with "Modu" id 
}

function negaFunc() { //defining a function and giving it a name
    var neg = 137; //defining a variable and giving it a number
    document.getElementById("Nega").innerHTML = -neg; //placing value of variable and negation into HTML elementFromPoint with "Nega" id 
}

function incFunc() { //defining a function and giving it a name
    var up = 14; //defining a variable and giving it a number
    up++; //variable with increment operator
    document.getElementById("Inc").innerHTML = up++; //placing value of variable operator into HTML elementFromPoint with "Inc" id 
}

function decFunc() { //defining a function and giving it a name
    var dwn = 14; //defining a variable and giving it a number
    dwn--; //variable with decrement operator
    document.getElementById("Dec").innerHTML= dwn--; //placing value of variable and operator into HTML elementFromPoint with "Dec" id 
}

document.write(Math.PI) //displaying the Math Object PI