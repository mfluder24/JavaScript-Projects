const Calculator = { //defining an object, keeps track of values
    Display_Value: '0', //property, displays 0 on screen
    First_Operand: null, //property, will hold first operand for expressions
    Wait_Second_Operand: false, //property, checks for presence of second operand
    operator: null, //property, will hold operator
};

function Input_Digit(digit) { //defining a function, modifies values when buttons are pressed
    const { Display_Value, Wait_Second_Operand } = Calculator; //defining a constant
    if (Wait_Second_Operand === true) { //if statement with conditions
        Calculator.Display_Value = digit; 
        Calculator.Wait_Second_Operand = false;
    } else { //else statement, overwrites display value if current value is 0, or adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { //defining a function, deals with decimal points
    if (Calculator.Wait_Second_Operand === true) return; //if statement, protects operations from accidental clicking of decimal point
    if (!Calculator.Display_Value.includes(dot)) { //if statement
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) { //defining a function, handles operators
    const { First_Operand, Display_Value, operator } = Calculator //defining a constant
    const Value_of_Input = parseFloat(Display_Value); //defining a constant, updates operator as necessary and exits from function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) { //if statement
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //else if statement, checks if operator already exists
        const Value_Now = First_Operand || 0; //defining a constant
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); //if operator exists, property lookup is performed for operator and function that matches operator is executed
        result = Number(result).toFixed(9)//adding a fixed amount of numbers after the decimal
        result = (result * 1).toString() //removes trailing 0s
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = { //defining a constant
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand, //defining divide function
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand, //defining multiply function
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand, //defining add function
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand, //defining subtract function
    '=': (First_Operand, Second_Operand) => Second_Operand //defining equals function
};

function Calculator_Reset() { //defining a function, deals with resetting the screen and values
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { //defining a function, updates screen with value of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display(); //calling a function

const keys = document.querySelector('.calculator-keys'); //defining a constant, monitors button clicks
keys.addEventListener('click', (event) => { 
    const {target} = event; 
    if (!target.matches('button')) { //if statement
        return;
    }

    if (target.classList.contains('operator')) { //if statement
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
 
    if (target.classList.contains('all-clear')) { //if statement
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})