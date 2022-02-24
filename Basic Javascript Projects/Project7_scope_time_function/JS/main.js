var F = 24; //defining a variable and giving it a name
function multFunc1() { //defining a function and giving it a name
    document.write(7*F+"<br>"); //displaying a math function and a string
}
function multFunc2() { //defining a function and giving it a name
    document.write(F*10); //displaying a math function
}
multFunc1(); //calling a function
multFunc2(); //calling a function

document.write("<br><br>"); //displaying a string

function multFunc3() { //defining a function and giving it a name
    var D = 42; //defining a variable and giving it a name
    document.write(11*D+"<br>"); //displaying a math function and a string
}
multFunc3(); //calling a function


function multFunc4() { //defining a function and giving it a name
    document.write(D*17); //purposely trying to display a local variable that is not local to the function
    console.log(D*17); //using the console.log method to debug
}
multFunc4(); //calling a function

function timeFunc() { //defining a function and giving it a name
    if (new Date().getHours() < 20) { //if statement with conditions
        document.getElementById("Time").innerHTML = "Keep up the good work!"; //making string display in the HTML elementFromPoint with "Time" id
    }
}

function ageFunc() { //defining a function and giving it a name
    var Age= document.getElementById("Age").value;
    if (Age >= 18) { //if statement with conditions
        document.getElementById("Film").innerHTML = "Enjoy the movie!"; //making string display in the HTML elementFromPoint with "Film" id
    }
    else { //else statement
        document.getElementById("Film").innerHTML = "You are too young to see this movie."; //making string display in the HTML elementFromPoint with "film" id
    }
}

function javaFunc() { //defining a function and giving it a name
    Cups = document.getElementById("Cups").value; //defining a variable and giving it a value
    if (Cups <= 5) { //if statement with conditions
        Java = "That's just right!"; //defining a variable and giving it a value
    }
    else { //else statement
        Java = "That's too many! Drink some water!"; //defining a variable and giving it a value
    }
    document.getElementById("manyCups").innerHTML = Java; //making element 'Java' display in the HTML elementFromPoint with "manyCups" id
}

function Time_function() { //defining a function and giving it a name
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { //if statement with conditions
        Reply = "It is morning time!"; //defining a variable and giving it a value
    }
    else if (Time >= 12 == Time < 18) { //else if statement with conditions
        Reply = "It is afternoon."; //defining a variable and giving it a value
    }
    else { //else statement
        Reply = "It is evening time."; //defining a variable and giving it a value
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //making string display in the HTML elementFromPoint with "Time_of_day" id
}