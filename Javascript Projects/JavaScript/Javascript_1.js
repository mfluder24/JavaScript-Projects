function colourFunc() {
    var colour_output;
    var colours = document.getElementById("colour_input").value;
    var colour_string = " is a great colour!";
    switch(colours) {
        case "Brown":
            colour_output = "Brown" + colour_string;
        break;
        case "Blue":
            colour_output = "Blue" + colour_string;
        break;
        case "Gold":
            colour_output = "Gold" + colour_string;
        break;
        case "Green":
            colour_output = "Green" + colour_string;
        break;
        case "Purple":
            colour_output = "Purple" + colour_string;
        break;
        case "Gray":
            colour_output = "Gray" + colour_string;
        break;
        case "Orange":
            coluor_output = "Orange" + colour_string;
        break;
        default:
            colour_output = "Please enter a colour exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML=colour_output;
}

function helloFunc() {
    var X = document.getElementsByClassName("click");
    X[0].innerHTML = "The text has changed!";
}

//VINCENT CANVAS START//
var c = document.getElementById("vincent");
var ctx = c.getContext("2d");

var grd1 = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd1.addColorStop(0, "blue");
grd1.addColorStop(1, "brown");

ctx.fillStyle = grd1;
ctx.fillRect(0,0,250,250);

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
//VINCENT END//

//GRECO START//
var g = document.getElementById("greco");
var gtx = g.getContext("2d");

var grd2 = gtx.createLinearGradient(0,0,170,0);
grd2.addColorStop(0, "green");
grd2.addColorStop(1, "brown");

gtx.fillStyle  = grd2;
gtx.fillRect(0,0,250,250);
//GRECO END//
