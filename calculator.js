document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Implement Arithmetic Functions ---

    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        // Handle division by zero case
        if (number2 === 0) {
            return "Error: Div by 0";
        }
        return number1 / number2;
    }

    /**
     * Helper function to retrieve and validate input numbers.
     * It uses parseFloat to convert strings to numbers and defaults to 0 for empty/invalid inputs.
     */
    function getInputs() {
        // Get the value from the input fields
        const number1Value = document.getElementById('number1').value;
        const number2Value = document.getElementById('number2').value;

        // Convert to float. If conversion fails (e.g., empty string), use 0.
        const number1 = parseFloat(number1Value) || 0;
        const number2 = parseFloat(number2Value) || 0;

        return { number1, number2 };
    }

    /**
     * Function to handle the calculation and display the result.
     * @param {function} operation - The arithmetic function to execute (add, subtract, etc.).
     */
    function calculateAndDisplay(operation) {
        const { number1, number2 } = getInputs();
        const result = operation(number1, number2);

        // Display the result in the span element
        document.getElementById('calculation-result').textContent = result;
    }


    // --- 2. Attach Event Listeners ---

    // Addition Button
    document.getElementById('add').addEventListener('click', function() {
        calculateAndDisplay(add);
    });

    // Subtraction Button
    document.getElementById('subtract').addEventListener('click', function() {
        calculateAndDisplay(subtract);
    });

    // Multiplication Button
    document.getElementById('multiply').addEventListener('click', function() {
        calculateAndDisplay(multiply);
    });

    // Division Button
    document.getElementById('divide').addEventListener('click', function() {
        calculateAndDisplay(divide);
    });

});