// Shows or hides the password input field based on the checkbox state
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var checkbox = document.getElementById("show-password");
    var confirmCheckbox = document.getElementById("show-confirm-password");

    if (checkbox.checked || confirmCheckbox.checked) {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
}
