let activePlayer = 'X'; //defining a variable and giving it a name, keeps track of whose turn it is
let selectedSquares = []; //defining an array, stores moves and is used to determine win conditions

function placeXOrO (squareNumber) { //defining a function and giving it a name, for placing x or o in a square
    if (!selectedSquares.some(element => element.includes(squareNumber))) { //if statement, condition checks to see that a square hasn't been selected already
        let select = document.getElementById(squareNumber); //defining a variable, retrieves html element that was clicked
        if (activePlayer === 'X') { //if statement, condition checks who's turn it is
            select.style.backgroundImage = 'url("images/x.png")'; //uses x if active player is x
        } else { //else statement
            select.style.backgroundImage = 'url("images/o.png")'; //uses o if active player is not x
        }
        selectedSquares.push(squareNumber + activePlayer); //concatenates variables and adds them to array
        checkWinConditions(); //calling a function
        if (activePlayer === 'X') { //if statement, condition for changing the active player
            activePlayer = 'O';
        } else { //else statement, condition for changing the active player
            activePlayer = 'X';
        }
        audio('./media/place.mp3'); //function, plays sound
        if(activePlayer === 'O') { //if statement, checks if computers turn
            disableClick(); //function, disables clicking if o is active player
            setTimeout (function () {computersTurn(); }, 1000) //function, waits 1 second for computer to play and enables click
        }
        return true; //return, needed for computersTurn() function to work
    }
    function computersTurn() { //defining a function, results in random square being selected
        let success = false; //defining a variable with a boolean, needed for while loop
        let pickASquare; //defining a variable
        while(!success) { //while loop, condition allows loop to keep trying if a square is already chosen
            pickASquare = String(Math.floor(Math.random()*9)); //a random number between 0-8 is chosen
            if (placeXOrO(pickASquare)) { //if statement
                placeXOrO(pickASquare); //calling a function
                success = true; //changes boolean and ends loop
            };
        }
    }
}

function checkWinConditions() { //defining a function, parses selectedSquares array for win conditions
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)} //if statement
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)} //else if statement
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWindLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    else if (selectedSquares.length >= 9) { //else if statement, checks for a tie and executes if tie is present
        audio('./media/tie.mp3'); //calling a function, plays tie sound
        setTimeout(function () {resetGame();}, 1000); //calling a function, resets game after a timer is set
    }
    function arrayIncludes(squareA, squareB, squareC) { //defining a function. checks win conditions
        const a = selectedSquares.includes(squareA) //defining a constant, checks for 3 in a row
        const b = selectedSquares.includes(squareB) //defining a constant, checks for 3 in a row
        const c = selectedSquares.includes(squareC) //defining a constant, checks for 3 in a row
        if (a === true && b === true && c === true) {return true} //if statement, will cause appropriate else if to execute
    }
}

function disableClick() { //defining a function, temporarily makes body unclickable
    body.style.pointerEvents = 'none'; //makes body unclickable
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000); //makes body clickable again after 1 second
}

function audio(audioURL) { //defining a function
    let audio = new Audio(audioURL); //defining a variable and instantiating a new object
    audio.play(); //play method
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //defining a function, uses canvas to draw win lines
    const canvas = document.getElementById('win-lines'); //defining a constant
    const c = canvas.getContext('2d'); //defining a constant
    let xl = coordX1, yl = coordY1, x2 = coordX2, y2 = coordY2, x = xl, y = yl; //indicates various starts/ends of x and y axis, stores temp data for animation loop

    function animateLineDrawing() { //defining a function, interacts with canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing); //defining a variable, creates a loop
        c.clearRect(0, 0, 608, 608) //method clears content from last loop iteration
        c.beginPath(); //method starts new path
        c.moveTo(xl, yl) //method puts us at starting point for line
        c.lineTo(x, y) //method indicates line end point
        c.lineWidth = 10; //method sets line width
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; //,method sets line colour
        c.stroke(); //method executes above specifications
        if (xl <= x2 && yl <= y2) { //if statement, condition checks for endpoint
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //condition cancels animation loop when end points are reached
        }
        if (xl <= x2 && yl >= y2) { //if statement, necessary for 6,4,2 win condition
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame (animationLoop); }
        }
    }
    
    function clear() { //defining a function, clears canvas after line is drawn
        const animationLoop = requestAnimationFrame(clear); //defining a constant, starts animation loop
        c.clearRect(0, 0, 608, 608); //clears canvas
        cancelAnimationFrame(animationLoop); //stops animation loop
    }    
    disableClick(); //function, disables clicking while win sound is playing
    audio('./media/winGame.mp3'); //plays win sound
    animateLineDrawing(); //calls animation loop
    setTimeout(function () { clear(); resetGame(); }, 1000); //waits 1 second, clears canvas, enables clicking 
}

function resetGame() { //defining a function, resets game after tie or win
    for (let i = 0; i < 9; i++) { //for loop
        let square = document.getElementById(String(i)) //defining a variable, gets html element of i
        square.style.backgroundImage='' //removes element's background
    }
    selectedSquares=[];//resets array
}

