// Simulated PIN for authentication
const correctPin = "2211";

// DOM Elements
const pinInput = document.getElementById("pin-input");
const pinSubmitButton = document.getElementById("pin-submit");
const errorMessage = document.getElementById("error-message");
const pinScreen = document.getElementById("pin-screen");
const mainMenu = document.getElementById("main-menu");
const exitButton = document.getElementById("exit-btn");

// Attempt counter
let attemptCount = 0;
let lockoutTimer = null;

// Event listener for PIN submission
pinSubmitButton.addEventListener("click", () => {
    const enteredPin = pinInput.value;

    if (enteredPin === correctPin) {
        // Hide PIN screen and show main menu
        pinScreen.classList.add("hidden");
        mainMenu.classList.remove("hidden");
        attemptCount = 0; // Reset attempt count
        errorMessage.textContent = ""; // Clear error message
    } else {
        // Increment attempt count
        attemptCount++;
        errorMessage.textContent = "Incorrect PIN. Please try again.";
        errorMessage.style.color = "red";
        errorMessage.style.marginTop = "10px";
        pinInput.value = "";

        // Lockout after 3 attempts
        if (attemptCount >= 3) {
            lockoutUser(30); // Lockout duration in seconds
        }
    }
});

// Clear error message when user starts typing
pinInput.addEventListener("input", () => {
    errorMessage.textContent = "";
});

// Exit button functionality
exitButton.addEventListener("click", () => {
    // Hide main menu and show PIN screen
    mainMenu.classList.add("hidden");
    pinScreen.classList.remove("hidden");

    // Clear PIN input and error messages
    pinInput.value = "";
    errorMessage.textContent = "";
});

// Lockout function
function lockoutUser(duration) {
    pinSubmitButton.disabled = true;
    let timeRemaining = duration;

    // Display initial message
    errorMessage.textContent = `Too many incorrect attempts. Try again in ${timeRemaining} seconds.`;

    // Start timer
    lockoutTimer = setInterval(() => {
        timeRemaining--;
        if (timeRemaining > 0) {
            errorMessage.textContent = `Too many incorrect attempts. Try again in ${timeRemaining} seconds.`;
        } else {
            // End lockout
            clearInterval(lockoutTimer);
            pinSubmitButton.disabled = false;
            errorMessage.textContent = ""; // Clear error message
            attemptCount = 0; // Reset attempt count
        }
    }, 1000); // Update every second
}
