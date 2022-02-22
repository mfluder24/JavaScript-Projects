function Poncho_Dictionary() { //Defining a function and giving it a name
    var Poncho = { //Defining a variable and creating a Dictionary
        Species: "Dog", //A KVP
        Breed: "Pembroke Welsh Corgi", //A KVP
        Color: "Red and White", //A KVP
        Age: 5, //A KVP
        Job: "Policing the cat", //A KVP
        Crime: "Pooping on the sidewalk" //A KVP
        
    };
    delete Poncho.Job; //using the delete operator to remove KVP Job from the Poncho dictionary
    document.getElementById("Dictionary").innerHTML = Poncho.Job; //placing value of variable and KVP into HTML elementFromPoint with "Dictionary" id 
}