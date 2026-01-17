// Shows or hides the password input field based on the checkbox state
function togglePasswordVisibility(fieldId, checkboxId) {
    var passwordInput = document.getElementById(fieldId);
    var checkbox = document.getElementById(checkboxId);

    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
