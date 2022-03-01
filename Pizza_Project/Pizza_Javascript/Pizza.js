function getReceipt() { //defining a function
    var text1 = "<h3>You ordered:</h3>"; //defining a variable
    var runningTotal = 0; //defining a variable 
    var sizeTotal= 0; //defining a variable 
    var sizeArray = document.getElementsByClassName("size"); //defining a variable
    for (var i = 0; i < sizeArray.length; i++) { //for loop
        if (sizeArray[i].checked) { //if statement
            var selectedSize = sizeArray[i].value; //defining a variable
            text1 = text1+selectedSize+"<br>"; //concatenating a variable
        }
    }
    if (selectedSize === "Personal Pizza") { //if statement w/ conditions
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {  //else if statement w/ conditions
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") { //else if statement w/ conditions
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") { //else if statement w/ conditions
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") { //else if statement w/ conditions
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getSauce(runningTotal,text1); //calling a function
};

function getSauce(runningTotal,text1) { //defining a function w/ parameters
    var sauceTotal= 0;
    var sauceArray= document.getElementsByClassName("sauce");
    for (var i = 0; i < sauceArray.length; i++) { //for loop
        if (sauceArray[i].checked) { //if statement
            var selectedSauce = sauceArray[i].value;
            text1 = text1+selectedSauce+"<br>";
        }
    }
    if (selectedSauce === "Marinara") { //if statement w/ conditions
        sauceTotal = 1;
    } else if (selectedSauce === "Olive Oil") { //else if statement w/ conditions
        sauceTotal = 1;
    } else if (selectedSauce === "Garlic Oil") { //else if statement w/ conditions
        sauceTotal = 1;
    } else if (selectedSauce === "Pesto") { //else if statement w/ conditions
        sauceTotal = 1;
    } else if (selectedSauce === "No Sauce") { //else if statement w/ conditions
        sauceTotal = 0;
    }
    runningTotal = (runningTotal + sauceTotal); 
    console.log(selectedSauce+" = $"+sauceTotal+".00");
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1); //calling a function
};

function getTopping(runningTotal,text1) { //defining a function w/ parameters
    var toppingTotal = 0; //defining a variable
    var selectedTopping = []; //defining a variable
    var toppingArray = document.getElementsByClassName("toppings"); //defining a variable 
    for (var j = 0; j < toppingArray.length; j++) { //for loop
        if (toppingArray[j].checked) { //if statement
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
         }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) { //if statement
        toppingTotal = (toppingCount - 1);
    } else { //else statement
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

