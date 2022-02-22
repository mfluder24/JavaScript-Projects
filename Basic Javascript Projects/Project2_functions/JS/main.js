function Func1() { //defining a function and giving it a name
    var str = "Button button, who has the button?"; //defining a variable and giving it a string
    document.getElementById("Button_Text").innerHTML = str; //placing value of variable into HTML elementFromPoint with "Button_Text" id 
}

function Func2() { //defining a function and giving it a name
    var sentence = "Space, "; //defining a variable and giving it concatenated string values
    sentence += "The Final Frontier";
    document.getElementById("Concatenate").innerHTML=sentence; //placing value of variable into HTML elementFromPoint with "Concatenate" id 
}

