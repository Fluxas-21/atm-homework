// DOM Elements
const withdrawInput = document.getElementById("withdraw-input");
const withdrawSubmitButton = document.getElementById("withdraw-submit");
const backToMenuButton = document.getElementById("back-to-menu");
const withdrawMessage = document.getElementById("withdraw-message");
const balanceDisplay = document.getElementById("balance-display");

// Function to update the displayed balance
function updateBalanceDisplay() {
    balanceDisplay.textContent = `Current Balance: $${getBalance()}`;
}

// Handle withdrawal
withdrawSubmitButton.addEventListener("click", () => {
    const withdrawAmount = parseFloat(withdrawInput.value);

    if (!withdrawAmount || withdrawAmount <= 0) {
        withdrawMessage.textContent = "Please enter a valid amount.";
        withdrawMessage.style.color = "red";
    } else if (withdrawAmount > getBalance()) {
        withdrawMessage.textContent = "Insufficient funds. Try a smaller amount.";
        withdrawMessage.style.color = "red";
    } else {
        const newBalance = getBalance() - withdrawAmount;
        updateBalance(newBalance); // Update the Local Storage balance
        withdrawMessage.textContent = `Success! You've withdrawn $${withdrawAmount}. Remaining balance: $${newBalance}.`;
        withdrawMessage.style.color = "green";
        withdrawInput.value = ""; // Clear input field
        updateBalanceDisplay(); // Update the displayed balance
    }
});

// Navigate back to main menu
backToMenuButton.addEventListener("click", () => {
    window.location.href = "../../index.html";
});

// Initialize the balance display on page load
updateBalanceDisplay();
