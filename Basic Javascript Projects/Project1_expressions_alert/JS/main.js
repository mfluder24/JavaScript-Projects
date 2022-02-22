var X ="The truth is out there"; //Defining a variable and assigning a value to it

window.alert(X); //Displaying variable X in a popup window

document.write("\"I know I can do it,\" Todd Downey said, helping himself to another ear of corn from the steaming bowl. \"I'm sure that in time her death will be a mystery, even to me.\""); //Displaying a string variable
document.write("<br>"); //Inserting a break tag

document.write("One man worried, " + "another man meditated, " + "one man found an answer, " + "the other found himself.") //Displaying a concatenated string 
document.write("<br>"); //inserting a break tag

var H = "We are all made of " + "Star Stuff." //Defining a variable and assigning a concatenated string value to it
document.write(H); //Displaying variable H
document.write("<br>"); //inserting a break tag

var NewWho = "The Doctor", Nine = "Christopher Eccelston", Ten = "David Tennant", Eleven ="Matt Smith", 
Twelve = "Peter Capaldi", Thirteen = "Jodie Whittaker"; //assigning multiple variables in one statement
document.write(Ten); //Displaying variable Ten
document.write("<br>"); //inserting a break tag

var T = "Thorin Oakenshield and "; //defining a variable and assigning it a string value
var B = " Bilbo Baggins"; //defining a variable and assigning it a string value
document.write(T + B) //Displaying a concatenated set of variables
document.write("<br>"); //inserting a break tag

document.write(20 + 4); //Displaying an expression

function redRage(x) {
    x.style.color = "red";
}

function noRage(x) {
    x.style.color = "black";
}