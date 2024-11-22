// Initialize account balance in Local Storage if not already set
if (!localStorage.getItem("accountBalance")) {
    localStorage.setItem("accountBalance", "1000"); // Default balance
}

// Function to get the current balance
function getBalance() {
    return parseFloat(localStorage.getItem("accountBalance"));
}

// Function to update the balance
function updateBalance(newBalance) {
    localStorage.setItem("accountBalance", newBalance.toString());
}
