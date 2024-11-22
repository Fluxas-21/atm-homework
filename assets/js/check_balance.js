// DOM Elements
const balanceDisplay = document.getElementById("balance-display");
const backToMenuButton = document.getElementById("back-to-menu");

// Display the current balance
function displayBalance() {
    balanceDisplay.textContent = `Your current balance is: $${getBalance()}`;
}

// Navigate back to main menu
backToMenuButton.addEventListener("click", () => {
    window.location.href = "../../index.html";
});

// Initialize display on page load
displayBalance();
