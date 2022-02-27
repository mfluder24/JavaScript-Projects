function Call_Loop() { //Defining a function and giving it a name
    var Digit = "" //defining a variable and giving it a name
    var F = 2; //defining a variable and giving it a name
    while (F < 25) { //while loop
        Digit += "<br>" + F; //parameters
        F++;
        F++;

    }
    document.getElementById("Loop").innerHTML = Digit; //making variable display in the HTML elementFromPoint with "digit" id
}

function lengFunc() { //Defining a function and giving it a name
    let text = "You've made today a great one, just by you being you!";
    let length = text.length;
    document.getElementById("leng").innerHTML=length; //making variable display in the HTML elementFromPoint with "leng" id
}

var Birds = ["Crow", "Raven", "Seagull", "Owl", "Pukeko", "Albatross", "Vulture", "American Woodcock"] //defining an array and giving it elements
var Content = ""; //defining a variable and giving it a name
var X; //defining a variable and giving it a name
function for_loop() { //Defining a function and giving it a name
    for (X = 0; X < Birds.length; X++) { //for loop 
        Content += Birds[X] + "<br>";
    }
    document.getElementById("bird_list").innerHTML = Content; //making variable display in the HTML elementFromPoint with "bird_list" id
}

function arrayFunc() { //Defining a function and giving it a name
    var Apples = []; //defining a variable as an array
    Apples[0]="Granny Smith"; //defining an element in the array
    Apples[1]="Pink Lady"; //defining an element in the array
    Apples[2]="Fuji"; //defining an element in the array
    Apples[3]="Honeycrisp"; //defining an element in the array
    Apples[4]="Gala"; //defining an element in the array
    Apples[5]="Jazz"; //defining an element in the array
    Apples[6]="Cameo"; //defining an element in the array
    Apples[7]="Ambrosia"; //defining an element in the array
    document.getElementById("array").innerHTML = "There are many types of apples. This apple is: " + Apples[4] + ".";
}

function constFunc() { //Defining a function and giving it a name
    const Oatmilk = {brand:"All Good Oatmilk", type: "Barista", temp:"Room Temperature"};
    Oatmilk.temp = "Cold";
    Oatmilk.price = "$4.50";
    document.getElementById("Constant").innerHTML = "The cost of the " + Oatmilk.brand + " was " + Oatmilk.price + " and the temperature is " + Oatmilk.temp; //making variable display in the HTML elementFromPoint with "constant" id
}

function letFunc() { //Defining a function and giving it a name
var R = "It's a beautiful day!"; //defining a variable and giving it a name
document.getElementById("letter1").innerHTML= R+"<br>"; //making variable display in the HTML elementFromPoint with "letter1" id
{
    let R = "Won't you be my neighbor?"; //defining a block scope variable
    document.getElementById("letter2").innerHTML= R+"<br>"; //making variable display in the HTML elementFromPoint with "letter2" id
}

document.getElementById("letter3").innerHTML= R; //making variable display in the HTML elementFromPoint with "letter3" id
}

let fruit = { //Defining an object and giving it a name
    type: "mango", //defining a property and giving it a value
    color: "gold ", //defining a property and giving it a value
    quality: "good ", //defining a property and giving it a value
    fresh: "ripe ", //defining a property and giving it a value
    description: function() { //defining a property and giving it a value of a function
        return "The fruit is a "+this.quality+this.fresh+this.color+this.type+"."; //returning a string
    }
};
document.getElementById("fruitobj").innerHTML=fruit.description(); //making variable display in the HTML elementFromPoint with "fruitobj" id

function brkFunc() { //Defining a function and giving it a name
    let text=""; //defining a block scope variable
    for (let i = 0; i < 17; i++) { //for loop with conditions
        if (i === 8) {break;} //if statement
        text += "The number is "+i+"<br>";
    }
document.getElementById("breaku").innerHTML=text; //making variable display in the HTML elementFromPoint with "breaku" id
}

function contFunc() { //Defining a function and giving it a name
    let text=""; //defining a block scope variable
    for (let i = 0; i < 17; i++) { //for loop with conditions
        if (i === 8) {continue;} //if statement
        text += "The number is "+i+"<br>";
    }
    document.getElementById("cont").innerHTML=text; //making variable display in the HTML elementFromPoint with "cont" id
}