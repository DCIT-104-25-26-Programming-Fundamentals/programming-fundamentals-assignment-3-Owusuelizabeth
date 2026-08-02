// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — 
const readline = require('readline-sync');

function runCalculator() {
  while (true) {
    console.log("=================================");
    console.log("        SIMPLE CALCULATOR        ");
    console.log("=================================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
    
    let choice = parseInt(readline.question("Select an operation (1-7): "));

    if (choice === 7) {
      console.log("Goodbye!");
      break;
    }

    if (isNaN(choice) || choice < 1 || choice > 7) {
      console.log("Error: Invalid choice! Please select a option between 1 and 7.\n");
      continue;
    }

    let num1 = parseFloat(readline.question("Enter first number : "));
    let num2 = parseFloat(readline.question("Enter second number: "));

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Error: Please enter valid numbers.\n");
      continue;
    }

    let result;
    let operatorStr;

    switch (choice) {
      case 1:
        result = num1 + num2;
        operatorStr = "+";
        break;
      case 2:
        result = num1 - num2;
        operatorStr = "-";
        break;
      case 3:
        result = num1 * num2;
        operatorStr = "*";
        break;
      case 4:
        if (num2 === 0) {
          console.log("Error: Cannot divide by zero.\n");
          continue;
        }
        result = num1 / num2;
        operatorStr = "/";
        break;
      case 5:
        if (num2 === 0) {
          console.log("Error: Cannot divide by zero.\n");
          continue;
        }
        result = num1 % num2;
        operatorStr = "%";
        break;
      case 6:
        result = Math.pow(num1, num2);
        operatorStr = "**";
        break;
    }

    console.log(`Result: ${num1} ${operatorStr} ${num2} = ${result.toFixed(2)}\n`);
  }
}

runCalculator();

// =============================================================================


