function concatFunc() { //Defining a function and giving it a name
    var part1 = "This is "; //defining a variable and giving it a string value
    var part2 = "now a "; //defining a variable and giving it a string value
    var part3 = "complete "; //defining a variable and giving it a string value
    var part4 = "sentence!"; //defining a variable and giving it a string value
    var sentence = part1.concat(part2, part3, part4); //defining a variable and giving it a value with a concatenate function
    document.getElementById("oatmilk").innerHTML = sentence; //making variable display in the HTML elementFromPoint with "oatmilk" id
}

function sliceFunc() { //Defining a function and giving it a name
    var Sentence = "I want to believe."; //defining a variable and giving it a string value
    var Section = Sentence.slice(7,17); //defining a variable and giving it a value with a slice function
    document.getElementById("slice").innerHTML = Section; //making variable display in the HTML elementFromPoint with "slice" id
}

function upFunc() { //Defining a function and giving it a name
    var text = "It's a beautiful day in the neighborhood!"; //defining a variable and giving it a value
    var result = text.toUpperCase(); //defining a variable and giving it a value with a toUpperCase function
    document.getElementById("upper").innerHTML = result; //making variable display in the HTML elementFromPoint with "upper" id
}

function srchFunc() { //Defining a function and giving it a name
    var msg = "What position is the first 'i' in this sentence?" //defining a variable and giving it a string value
    var position = msg.search("i"); //defining a variable and giving it a value with the search function
    document.getElementById("srch").innerHTML=position; //making variable display in the HTML elementFromPoint with "srch" id
}

function stringFunc() { //Defining a function and giving it a name
    var R = 143; //defining a variable and giving it a value
    document.getElementById("numstring").innerHTML=R.toString(); //making variable display in the HTML elementFromPoint with "numstring" id
}

function preciFunc() { //Defining a function and giving it a name
    var P = 247893.98723469832; //defining a variable and giving it a value
    document.getElementById("preci").innerHTML=P.toPrecision(7); //making variable display in the HTML elementFromPoint with "preci" id
}

function fixFunc() { //Defining a function and giving it a name
    var num = 8.937125408; //defining a variable and giving it a value
    var N = num.toFixed(); //defining a variable and giving it a value of the toFixed function
    document.getElementById("tofix").innerHTML=N; //making variable display in the HTML elementFromPoint with "tofix" id
}

function valFunc() { //Defining a function and giving it a name
    var msg = "I like you just the way you are!"; //defining a variable and giving it a string value
    var result = msg.valueOf(); //defining a variable and giving it a value with the valueOf function
    document.getElementById("val").innerHTML=result; //making variable display in the HTML elementFromPoint with "val" id
}