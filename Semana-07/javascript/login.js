var validEmail = false;
var validPassword = false;

window.onload = function() {
    var emailInput = document.getElementById("email");
    var password = document.getElementById("password");
    var fieldset = document.getElementsByTagName("fieldset");
    var errorEmail = document.createElement("p");
    var errorPassword = document.createElement("p");
    errorEmail.innerHTML = " ";
    errorPassword.innerHTML = " ";
    errorEmail.classList.add("error-message");
    errorPassword.classList.add("error-message");
    fieldset[0].appendChild(errorEmail);
    fieldset[1].appendChild(errorPassword);
    var sendButton = document.getElementById("submit-button");

    emailInput.onblur = function() {
        if(validateEmail(emailInput.value)){
            emailInput.classList.add("green-border");
            validEmail = true;
        }else{
            emailInput.classList.add("red-border");
            validEmail = false;
            errorEmail.innerHTML = "Invalid email format";
        }
    }
    emailInput.onfocus = function() {
        emailInput.classList.remove("green-border");
        emailInput.classList.remove("red-border");
        errorEmail.innerHTML = " ";
    }
    password.onblur = function() {
        if(!isEmpty(password.value)){
            if(passwordVerification(password.value)){
                password.classList.add("green-border");
                validPassword = true;
            }else{
                password.classList.add("red-border");
                validPassword = false;
                errorPassword.innerHTML = "Password must be longer than 8 characters and cannot contain special characters";
            }
        }else{
            password.classList.add("red-border");
            validPassword = false;
            errorPassword.innerHTML = "Password must not be empty";
        }
    }
    password.onfocus = function() {
        password.classList.remove("green-border");
        password.classList.remove("red-border");
        errorPassword.innerHTML = " ";
    }
    sendButton.onclick = function(event) {
        event.preventDefault();
        if(validEmail && validPassword){
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email='+emailInput.value+'&password='+password.value)
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
            var errorAlert = ["Error: "];
            if(!validEmail) errorAlert.push(errorEmail.innerHTML);
            if(!validPassword) errorAlert.push(errorPassword.innerHTML);
            alert(errorAlert.join("\n"));
        }
    }
}
function isEmpty(text){
    if(text != ""){
        return false;
    }
    return true;
}
function validateEmail(emailText){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailExpression.test(emailText);
}
function passwordVerification(passwordText, errorPassword){
    if(passwordText.length >= 8){
        return !hasSpecialChar(passwordText);
    }else{
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