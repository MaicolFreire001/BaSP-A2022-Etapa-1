window.onload = function() {
    var emailInput = document.getElementById("email");
    var validEmail = false;
    var passwordInput = document.getElementById("password");

    emailInput.onblur = function() {
        if(validateEmail(emailInput.value)){
            emailInput.classList.add("green-border");
            validEmail = true;
        }else{
            emailInput.classList.add("red-border");
            validEmail = false;
        }
    }
    emailInput.onfocus = function() {
        emailInput.classList.remove("green-border");
        emailInput.classList.remove("red-border");
    }
    passwordInput.onblur = function() {
        if(passwordVerification(passwordInput.value)){
            passwordInput.classList.add("green-border");
        }else{
            passwordInput.classList.add("red-border");
        }
    }
    passwordInput.onfocus = function() {
        passwordInput.classList.remove("green-border");
        passwordInput.classList.remove("red-border");
    }
}

function validateEmail(emailText){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailExpression.test(emailText);
}
function passwordVerification(passwordText){
    if(passwordText.length >= 8){
        console.log(passwordText);
        return !hasSpecialChar(passwordText);
    }else{
        return false;
    }
}
function hasSpecialChar(text){
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
        return true;
    }else{
        return false;
    }
}