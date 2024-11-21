if (localStorage.getItem('username')) {
    history.back()
}

/*** User is not logged in ***/

document.querySelector('#logInButton').addEventListener('click', () => {
// Get the data from the form
const username = document.querySelector("#username").value.trim();
const password = document.querySelector("#password").value.trim();

// Verify that all of the fields have valid input
if (!firstName || !lastName || !username || !password) {
    // Inform the user of what is missing
    let missingFields = [];

    if (!username) missingFields.push("Username");
    if (!password) missingFields.push("Password");

    alert("Please fill out the following fields: " + missingFields.join(", "));
    return; // Exit the function so the rest of the code doesn't run
}

// Here we can simulate sending the user data with a fetch call to a server
// For simplicity, we're going to assume the server response is successful.

// Store the username from the form in localStorage
localStorage.setItem("username", username);

// Redirect the user to the home page
location.href = "e11.html";
})