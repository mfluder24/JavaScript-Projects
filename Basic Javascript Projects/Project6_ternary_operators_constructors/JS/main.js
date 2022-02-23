function Ride_Function() { //Defining a function and giving it a name
    var Height, Can_ride; //naming two variables
    Height = document.getElementById("Height").value; //defining a variable and giving it an input value via ElementId
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //defining a variable with a ternary operator
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //making variable and string display in the HTML elementFromPoint with "Ride" id 
}

function ageFunc() { //Defining a function and giving it a name
    var Age, Can_vote; //naming two variables
    Age = document.getElementById("Age").value; //defining a variable and giving it an input value via ElementId
    Can_vote = (Age < 18) ? "You are too young":"You are able"; //defining a variable with a ternary operator
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; //making variable and string display in the HTML elementFromPoint with "Vote" id
}

function Vehicle (Make, Model, Year, Color) { //Defining a constructor function and giving it parameters
    this.Vehicle_Make = Make; //assigning a parameter to a property
    this.Vehicle_Model = Model; //assigning a parameter to a property
    this.Vehicle_Year = Year; //assigning a parameter to a property
    this.Vehicle_Color = Color; //assigning a parameter to a property
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //defining a variable and instantiating an object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //defining a variable and instantiating an object
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //defining a variable and instantiating an object
function myFunction() { //defining a function and giving it a name
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " +Erik.Vehicle_Color+"-colored "+Erik.Vehicle_Model+" manufactured in "+Erik.Vehicle_Year; //making variable and string display in the HTML elementFromPoint with "Keywords_and_Constructors" id
    document.getElementById("New_and_This").innerHTML = "Emily drives a " +Emily.Vehicle_Color+"-colored "+Emily.Vehicle_Model+" manufactured in "+Emily.Vehicle_Year; //making variable and string display in the HTML elementFromPoint with "New_and_This" id
}

function Bird(family, color, age, health) { //Defining a constructor function and giving it parameters
    this.Family = family; //assigning a parameter to a property
    this.Color = color; //assigning a parameter to a property
    this.Age = age; //assigning a parameter to a property
    this.Health = health; //assigning a parameter to a property
}
var Crow = new Bird("Corvidae", "black", 4, "great"); //defining a variable and instantiating an object
var Seagull = new Bird("Laridae", "white and gray", 6, "questionable"); //defining a variable and instantiating an object
var A_Woodcock = new Bird("Scolopacidae", "brown w/ spots", 3, "normal"); //defining a variable and instantiating an object
function daBirds() { //defining a function and giving it a name
    document.getElementById("crowBird").innerHTML = "The Crow is in the "+Crow.Family+" family, is "+Crow.Age+" years old, and is in "+Crow.Health+" health."; //making variable and string display in the HTML elementFromPoint with "crowBird" id
    document.getElementById("gullBird").innerHTML = "The Seagull is in the "+Seagull.Family+" family, is "+Seagull.Age+" years old, and is in "+Seagull.Health+" health."; //making variable and string display in the HTML elementFromPoint with "gullBird" id
}

function nestFunc() { //Defining a function and giving it a name
    document.getElementById("Nested_Function").innerHTML = Count(); //calling nested function Count() with the HTML elementFromPoint with "Nested_Function" id
    function Count() { //Defining a nested function and giving it a name
        var Starting_point = 2; //defining a variable and giving it a number value
        function Plus_one() {Starting_point += 17*3;} //defining function
        Plus_one(); //calling function
        return Starting_point; //returning result of variable
    }
}