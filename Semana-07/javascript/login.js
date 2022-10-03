var validEmail = false;
var validPassword = false;

window.onload = function() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var fieldset = document.getElementsByTagName("fieldset");
    var errorMail = document.createElement("p");
    var errorPassword = document.createElement("p");
    errorMail.innerHTML = " ";
    errorPassword.innerHTML = " ";
    errorMail.classList.add("error-message");
    errorPassword.classList.add("error-message");
    fieldset[0].appendChild(errorMail);
    fieldset[1].appendChild(errorPassword);
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
        if(passwordVerification(passwordInput.value, errorPassword)){
            passwordInput.classList.add("green-border");
            validPassword = true;
        }else{
            passwordInput.classList.add("red-border");
            validPassword = false;
            errorPassword.innerHTML = "Password must not contain special characters";
        }
    }
    passwordInput.onfocus = function() {
        passwordInput.classList.remove("green-border");
        passwordInput.classList.remove("red-border");
        errorPassword.innerHTML = " ";
    }
    sendButton.onclick = function(event) {
        event.preventDefault();
        if(validEmail && validPassword){
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email='+emailInput.value+'&password='+passwordInput.value)
                .then( function(res) {
                    if(res.ok){
                        return res.json();
                    }
                    throw new Error(res.status +" "+ res.statusText +"\n"+ "Wrong email or password");
                })
                .then( function(data) {
                    alert(data.msg);
                })
                .catch( function(error) {
                    alert(error);
                })
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
function passwordVerification(passwordText, errorPassword){
    if(passwordText.length >= 8){
        return !hasSpecialChar(passwordText, errorPassword);
    }else{
        errorPassword.innerHTML = "Password must be 8 or more characters";
        return false;
    }
}
function hasSpecialChar(text, errorPassword){
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
        errorPassword.innerHTML = "Password must not contain an special character";
        return true;
    }else{
        return false;
    }
}