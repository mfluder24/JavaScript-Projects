function countdown() { //Defining a function and giving it a name
    var seconds = document.getElementById("seconds").value; //defining a variable and giving it a value

    function tick() { //Defining a function and giving it a name
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);  //defining a variable and giving it a value
        if (seconds == -1) { //if statement
            alert("Time's up!"); //calling a function
            clearTimeout(time); //calling a function
            timer.innerHTML = "";
        }
    }
    tick(); //calling a function
}

var slideIndex = 1; //defining a variable and giving it a value
showSlides(slideIndex); //calling a function

//NEXT/PREV CONTROLS
function plusSlides(n) { //Defining a function and giving it a name
    showSlides(slideIndex += n); //calling a function and giving it parameters
}

//THUMBNAIL IMG CONTROLS
function currentSlide(n) { //Defining a function and giving it a name
    showSlides(slideIndex = n); //calling a function and giving it parameters
}

function showSlides(n) { //Defining a function and giving it a name
    var i; //defining a variable and giving it a value
    var slides = document.getElementsByClassName("slides"); //defining a variable and giving it a value
    var dots = document.getElementsByClassName("dot"); //defining a variable and giving it a value
    if (n > slides.length) {slideIndex=1} //if statement
    if (n < 1) {slideIndex = slides.length} //if statement
    for (i = 0; i < slides.length; i++) { //for statement
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //for statement
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}