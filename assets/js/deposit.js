// DOM Elements
const depositInput = document.getElementById("deposit-input");
const depositSubmitButton = document.getElementById("deposit-submit");
const backToMenuButton = document.getElementById("back-to-menu");
const depositMessage = document.getElementById("deposit-message");

// Handle deposit action
depositSubmitButton.addEventListener("click", () => {
    const depositAmount = parseFloat(depositInput.value);

    if (!depositAmount || depositAmount <= 0) {
        depositMessage.textContent = "Please enter a valid amount.";
        depositMessage.style.color = "red";
    } else {
        const newBalance = getBalance() + depositAmount;
        updateBalance(newBalance); // Update the global balance
        depositMessage.textContent = `Success! You've deposited $${depositAmount}. New balance: $${newBalance}.`;
        depositMessage.style.color = "green";
        depositInput.value = ""; // Clear the input field
    }
});

// Navigate back to main menu
backToMenuButton.addEventListener("click", () => {
    window.location.href = "../../index.html";
});
