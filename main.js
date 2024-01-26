document.addEventListener("DOMContentLoaded", function() {
    let password = document.querySelector("#password").value;
    let confirmPass = document.querySelector("#conf_password").value;
    let error = document.querySelector("#error").value;

    if(password == "" && confirmPass =="") {
        error.innerHTML = "*passwords do not match"
    }

    if(password != confirmPassword) {

    }
})