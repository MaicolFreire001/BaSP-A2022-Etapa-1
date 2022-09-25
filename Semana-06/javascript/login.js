var validEmail = false;
var validPassword = false;

window.onload = function() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var fieldset = document.getElementsByTagName("fieldset");
    console.log(fieldset);
    var errorMail = document.createElement("label");
    var errorPWord = document.createElement("label");
    errorMail.innerHTML = " ";
    errorPWord.innerHTML = " ";
    errorMail.classList.add("error-message");
    errorPWord.classList.add("error-message");
    fieldset[0].appendChild(errorMail);
    fieldset[1].appendChild(errorPWord);
    var sendButton = document.getElementById("submit-button");

    emailInput.onblur = function() {
        if(validateEmail(emailInput.value)){
            emailInput.classList.add("green-border");
            validEmail = true;
        }else{
            emailInput.classList.add("red-border");
            validEmail = false;
            errorMail.innerHTML = "Invalid email";
        }
    }
    emailInput.onfocus = function() {
        emailInput.classList.remove("green-border");
        emailInput.classList.remove("red-border");
        errorMail.innerHTML = " ";
    }
    passwordInput.onblur = function() {
        if(passwordVerification(passwordInput.value, errorPWord)){
            passwordInput.classList.add("green-border");
            validPassword = true;
        }else{
            passwordInput.classList.add("red-border");
            validPassword = false;
        }
    }
    passwordInput.onfocus = function() {
        passwordInput.classList.remove("green-border");
        passwordInput.classList.remove("red-border");
        errorPWord.innerHTML = " ";
    }
    sendButton.onclick = function() {
        if(validEmail && validPassword){
            alert("Login succesful \nEmail: " + emailInput.value + "\nPassword: " +passwordInput.value);
        }else{
            if(!validEmail) alert("Invalid email entered");
            if(!validPassword) alert("Invalid password entered");
        }
    }
}

function validateEmail(emailText){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailExpression.test(emailText);
}
function passwordVerification(passwordText, errorPWord){
    if(passwordText.length >= 8){
        console.log(passwordText);
        return !hasSpecialChar(passwordText, errorPWord);
    }else{
        errorPWord.innerHTML = "Password must be 8 or more characters";
        return false;
    }
}
function hasSpecialChar(text, errorPWord){
    if(text.includes(" ") || text.includes("`") || text.includes("!") ||
    text.includes("@")|| text.includes("#") || text.includes("$") ||
    text.includes("%")|| text.includes("^") || text.includes("&") ||
    text.includes("*")|| text.includes("(") || text.includes(")") ||
    text.includes("_")|| text.includes("+") || text.includes("\\") ||
    text.includes("-")|| text.includes("=") || text.includes("[") ||
    text.includes("]")|| text.includes("{") || text.includes("}") ||
    text.includes(";")|| text.includes("'") || text.includes(":") ||
    text.includes("\"")|| text.includes("|") || text.includes(",") ||
    text.includes(".")|| text.includes("<") || text.includes(">") ||
    text.includes("?")|| text.includes("~")){
        errorPWord.innerHTML = "Password must not contain an special character";
        return true;
    }else{
        return false;
    }
}