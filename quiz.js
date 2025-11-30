/**
 * Function to check the user's selected answer against the correct answer
 * and display appropriate feedback.
 */
function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";

    // 2. Retrieve the User’s Answer
    // Selects the currently checked radio button with the name="quiz"
    const selectedInput = document.querySelector('input[name="quiz"]:checked');
    
    // Check if any radio button was selected
    if (!selectedInput) {
        document.getElementById('feedback').textContent = "Please select an answer first!";
        return; // Stop the function if no answer is selected
    }
    
    // Get the value (the answer) from the selected radio button
    const userAnswer = selectedInput.value;

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // 3. Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        // Correct Answer Logic
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = 'green';
    } else {
        // Incorrect Answer Logic
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = 'red';
    }
}

// 4. Add an Event Listener to the Submit Button

// Ensure the DOM is fully loaded before trying to access elements
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Submit Answer" button
    const submitButton = document.getElementById('submit-answer');
    
    // Attach the checkAnswer function to the button's click event
    // Note: The function name is passed without parentheses ()
    submitButton.addEventListener('click', checkAnswer);
});