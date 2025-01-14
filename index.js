
var button = document.getElementById('button');

function login() {
    var userEmail = document.getElementById('email').value;

    var userPassword = document.getElementById('pass').value;

    if (userEmail === "user123@gmail.com" && userPassword === "1234567890") {

        alert("You are Successfully Login")

    } else {
        alert("Invalid User Name And Password");
    }
}

button.addEventListener("click", login)