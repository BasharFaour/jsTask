const username = prompt("Enter your username:");
let attempts = 5;
let password;

while (attempts > 0) {
    password = prompt("Enter your password:");

    if (password === "123") {
        alert(`Welcome, ${username}!`);
        break; 
    } else {
        attempts--;
        if (attempts > 0) {
            alert(`Incorrect password. You have ${attempts} attempt(s) left.`);
        }
    }
}

if (attempts === 0) {
    alert("Please try again later.");
}
