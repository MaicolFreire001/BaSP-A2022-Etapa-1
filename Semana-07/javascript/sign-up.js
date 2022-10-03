var validFirstName = false;
var validLastName = false;
var validDNI = false;
var validDate = false;
var validTel = false;
var validAddress = false;
var validLocality = false;
var validPostalCode = false;
var validEmail = false;
var validPassword = false;
var validMatchingPassword = false;
var keyName = ["name","lastName","dni", "dob", "phone","address",
"city","zip","email","password"];

window.onload = function() {

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var dni = document.getElementById("dni");
    var dateOfBirth = document.getElementById("dateOfBirth");
    var telephone = document.getElementById("telephone");
    var address = document.getElementById("address");
    var locality = document.getElementById("locality");
    var postalCode = document.getElementById("postalCode");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("repeatPassword");
    var fields = [firstName, lastName, dni, dateOfBirth, telephone, address, locality,
         postalCode, email, password];

    var errorFirstName = document.createElement("p");
    var errorLastName = document.createElement("p");
    var errorDni = document.createElement("p");
    var errorDate = document.createElement("p");
    var errorTel = document.createElement("p");
    var errorAddress = document.createElement("p");
    var errorLocality = document.createElement("p");
    var errorPostalCode = document.createElement("p");
    var errorEmail = document.createElement("p");
    var errorPassword = document.createElement("p");
    var errorRepeatPassword = document.createElement("p");

    errorFirstName.innerHTML = " ";
    errorLastName.innerHTML = " ";
    errorDni.innerHTML = " ";
    errorDate.innerHTML = " ";
    errorTel.innerHTML = " ";
    errorAddress.innerHTML = " ";
    errorLocality.innerHTML = " ";
    errorPostalCode.innerHTML = " ";
    errorEmail.innerHTML = " ";
    errorPassword.innerHTML = " ";
    errorRepeatPassword.innerHTML = " ";

    errorFirstName.classList.add("error-message");
    errorLastName.classList.add("error-message");
    errorDni.classList.add("error-message");
    errorDate.classList.add("error-message");
    errorTel.classList.add("error-message");
    errorAddress.classList.add("error-message");
    errorLocality.classList.add("error-message");
    errorPostalCode.classList.add("error-message");
    errorEmail.classList.add("error-message");
    errorPassword.classList.add("error-message");
    errorRepeatPassword.classList.add("error-message");

    document.getElementById("fieldsetFirstName").appendChild(errorFirstName);
    document.getElementById("fieldsetLastName").appendChild(errorLastName);
    document.getElementById("fieldsetDni").appendChild(errorDni);
    document.getElementById("fieldsetDob").appendChild(errorDate);
    document.getElementById("fieldsetTel").appendChild(errorTel);
    document.getElementById("fieldsetAddress").appendChild(errorAddress);
    document.getElementById("fieldsetLocality").appendChild(errorLocality);
    document.getElementById("fieldsetPostalCode").appendChild(errorPostalCode);
    document.getElementById("fieldsetEmail").appendChild(errorEmail);
    document.getElementById("fieldsetPassword").appendChild(errorPassword);
    document.getElementById("fieldsetRepeatPassword").appendChild(errorRepeatPassword);

    var sendButton = document.getElementById("submit-button");

    loadFields(fields);

    firstName.onblur = function() {
        if(checkLength(firstName.value, 3)){
            if(onlyLetters(firstName.value)){
                firstName.classList.add("green-border");
                validFirstName = true;
            }else{
                firstName.classList.add("red-border");
                validFirstName = false;
                errorFirstName.innerHTML = "First name must be only letters";
            }
        }else{
            firstName.classList.add("red-border");
            validFirstName = false;
            errorFirstName.innerHTML = "First name must be longer than 2 characters";
        }
    }
    firstName.onfocus = function() {
        firstName.classList.remove("green-border");
        firstName.classList.remove("red-border");
        errorFirstName.innerHTML = " ";
    }
    lastName.onblur = function() {
        if(checkLength(lastName.value, 3)){
            if(onlyLetters(lastName.value)){
                lastName.classList.add("green-border");
                validLastName = true;
            }else{
                lastName.classList.add("red-border");
                validLastName = false;
                errorLastName.innerHTML = "Last name must be only letters";
            }
        }else{
            lastName.classList.add("red-border");
            validLastName = false;
            errorLastName.innerHTML = "Last name must be longer than 2 characters";
        }
    }
    lastName.onfocus = function() {
        lastName.classList.remove("green-border");
        lastName.classList.remove("red-border");
        errorLastName.innerHTML = " ";
    }
    dni.onblur = function() {
        if(checkLength(dni.value, 7) && !checkLength(dni.value, 9)){
            if(onlyNumbers(dni.value)){
                dni.classList.add("green-border");
                validDNI = true;
            }else{
                dni.classList.add("red-border");
                validDNI = false;
                errorDni.innerHTML = "DNI must be only numbers";
            }
        }else{
            dni.classList.add("red-border");
            validDNI = false;
            errorDni.innerHTML = "DNI must be 7 or 8 characters long";
        }
    }
    dni.onfocus = function() {
        dni.classList.remove("green-border");
        dni.classList.remove("red-border");
        errorDni.innerHTML = " ";
    }
    dateOfBirth.onblur = function() {
        if(!isEmpty(dateOfBirth.value)){
            if(checkDate(dateOfBirth.value)){
                dateOfBirth.classList.add("green-border");
                validDate = true;
            }else{
                dateOfBirth.classList.add("red-border");
                validDate = false;
                errorDate.innerHTML = "Must be older than 18";
            }
        }else{
            dateOfBirth.classList.add("red-border");
            validDate = false;
            errorDate.innerHTML = "A date of birth must be entered";
        }
    }
    dateOfBirth.onfocus = function() {
        dateOfBirth.classList.remove("green-border");
        dateOfBirth.classList.remove("red-border");
        errorDate.innerHTML = " ";
    }
    telephone.onblur = function() {
        if(checkExactLength(telephone.value, 10)){
            if(onlyNumbers(telephone.value)){
                telephone.classList.add("green-border");
                validTel = true;
            }else{
                telephone.classList.add("red-border");
                validTel = false;
                errorTel.innerHTML = "Telephone must be only numbers";
            }
        }else{
            telephone.classList.add("red-border");
            validTel = false;
            errorTel.innerHTML = "Telephone number must be 10 digits";
        }
    }
    telephone.onfocus = function() {
        telephone.classList.remove("green-border");
        telephone.classList.remove("red-border");
        errorTel.innerHTML = " ";
    }
    address.onblur = function() {
        if(checkLength(address.value, 5)){
            if(haveLetter(address.value) && haveNumber(address.value) && haveOnlyOneSpace(address.value)){
                address.classList.add("green-border");
                validAddress = true;
            }else{
                address.classList.add("red-border");
                validAddress = false;
                errorAddress.innerHTML = "Address must contain numbers, letters and only one blank space";
            }
        }else{
            address.classList.add("red-border");
            validAddress = false;
            errorAddress.innerHTML = "Address must be longer than 4 characters";
        }
    }
    address.onfocus = function() {
        address.classList.remove("green-border");
        address.classList.remove("red-border");
        errorAddress.innerHTML = " ";
    }
    locality.onblur = function() {
        if(checkLength(locality.value, 3)){
            if(haveLetter(locality.value) && !hasSpecialCharWithoutSpace(locality.value)){
                locality.classList.add("green-border");
                validLocality = true;
            }else{
                locality.classList.add("red-border");
                validLocality = false;
                errorLocality.innerHTML = "Locality must not contain an special character";
            }
        }else{
            locality.classList.add("red-border");
            validLocality = false;
            errorLocality.innerHTML = "Locality must be longer than 2 characters";
        }
    }
    locality.onfocus = function() {
        locality.classList.remove("green-border");
        locality.classList.remove("red-border");
        errorLocality.innerHTML = " ";
    }
    postalCode.onblur = function() {
        if(checkLength(postalCode.value, 4) && !checkLength(postalCode.value, 6)){
            if(onlyNumbers(postalCode.value)){
                postalCode.classList.add("green-border");
                validPostalCode = true;
            }else{
                postalCode.classList.add("red-border");
                validPostalCode = false;
                errorPostalCode.innerHTML = "Postal code must be only numbers";
            }
        }else{
            postalCode.classList.add("red-border");
            validPostalCode = false;
            errorPostalCode.innerHTML = "Postal code must have 4 or 5 digits";
        }
    }
    postalCode.onfocus = function() {
        postalCode.classList.remove("green-border");
        postalCode.classList.remove("red-border");
        errorPostalCode.innerHTML = " ";
    }
    email.onblur = function() {
        if(validateEmail(email.value)){
            email.classList.add("green-border");
            validEmail = true;
        }else{
            email.classList.add("red-border");
            validEmail = false;
            errorEmail.innerHTML = "Invalid email format";
        }
    }
    email.onfocus = function() {
        email.classList.remove("green-border");
        email.classList.remove("red-border");
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
    repeatPassword.onblur = function() {
        if(validPassword){
            if(password.value == repeatPassword.value){
                repeatPassword.classList.add("green-border");
                validMatchingPassword = true;
            }else{
                repeatPassword.classList.add("red-border");
                validMatchingPassword = false;
                errorRepeatPassword.innerHTML = "Passwords doesn't match";
            }
        }else{
            repeatPassword.classList.add("red-border");
            validMatchingPassword = false;
            errorRepeatPassword.innerHTML = "Please enter a valid password first";
        }
    }
    repeatPassword.onfocus = function() {
        repeatPassword.classList.remove("green-border");
        repeatPassword.classList.remove("red-border");
        errorRepeatPassword.innerHTML = " ";
    }
    sendButton.onclick = function(event) {
        event.preventDefault();
        if(validFirstName && validLastName && validDNI && validDate
        && validTel && validAddress && validLocality && validPostalCode
        && validEmail && validPassword && validMatchingPassword)
        {
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?' + dataToQueryParams(getInputData());
            fetch(url)
            .then( function(res) {
                return res.json();
            })
            .then(function(data) {
                if(data.success){
                    tempDate = data.data.dob.split("/");
                    fixedDate = tempDate[2]+"-"+tempDate[0]+"-"+tempDate[1];
                    var responseData = ["First name: "+data.data.name,"Last name: "+data.data.lastName,"DNI: "+data.data.dni,
                    "Date of birth: "+fixedDate,"Phone: "+data.data.phone,"Address: "+data.data.address,"Locality: "+
                    data.data.city,"Postal code: "+data.data.zip,"Email: "+data.data.email,"Password: "+data.data.password];
                    alert(data.msg + "\n" + responseData.join("\n"));
                }else{
                    var errorsReturned = [" "]
                    if(data.errors != null){
                        for(var i = 0; i < data.errors.length; i++){
                            errorsReturned.push(data.errors[i].msg);
                        }
                        throw new Error(errorsReturned.join("\n"));
                    }
                }
                if(responseData.length == keyName.length){
                    for(var i = 0; i < responseData.length; i++){
                        localStorage.setItem(keyName[i],responseData[i].split(":")[1].slice(1));
                    }
                }
            })
            .catch( function(error) {
                alert(error);
            })
        }else{
            var errorAlert = ["Error: "];
            if(!validFirstName) errorAlert.push(errorFirstName.innerHTML);
            if(!validLastName) errorAlert.push(errorLastName.innerHTML);
            if(!validDNI) errorAlert.push(errorDni.innerHTML);
            if(!validDate) errorAlert.push(errorDate.innerHTML);
            if(!validTel) errorAlert.push(errorTel.innerHTML);
            if(!validAddress) errorAlert.push(errorAddress.innerHTML);
            if(!validLocality) errorAlert.push(errorLocality.innerHTML);
            if(!validPostalCode) errorAlert.push(errorPostalCode.innerHTML);
            if(!validEmail) errorAlert.push(errorEmail.innerHTML);
            if(!validPassword) errorAlert.push(errorPassword.innerHTML);
            if(!validMatchingPassword) errorAlert.push(errorRepeatPassword.innerHTML);
            alert(errorAlert.join("\n"));
        }
    }
}

function checkLength(text,validLength){
    if(text.length >= validLength){
        return true;
    }
    return false;
}
function checkExactLength(text, validLength){
    if(text.length == validLength){
        return true;
    }
    return false;
}
function haveAnSpace(text){
    for(var i = 1; i < text.length-1; i++){
        if(text.charAt(i) == " "){
            return true;
        }
    }
    return false;
}
function haveOnlyOneSpace(text){
    var counter = 0;
    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) == " "){
            if(i == 0){
                return false;
            }
            counter++;
        }
    }
    return counter == 1;
}
function onlyLetters(text){
    if(!isEmpty(text)){
        if(!hasSpecialChar(text)){
            for(var i = 0; i < text.length; i++){
                if(!isNaN(text.charAt(i))){
                    return false;
                }
            }
            return true;
        }else{
            return false;
        }
    }
    return false;
}
function onlyNumbers(text){
    if(!isEmpty(text)){
        if(!hasSpecialChar(text)){
            for(var i = 0; i < text.length; i++){
                if(isNaN(text.charAt(i))){
                    return false;
                }
            }
            return true;
        }else{
            return false;
        }
    }
    return false;
}
function isEmpty(text){
    if(text != ""){
        return false;
    }
    return true;
}
function haveLetter(text){
    if(!isEmpty(text)){
        for(var i = 0; i < text.length; i++){
            if(isNaN(text.charAt(i)) && text.charAt(i) != " "){
                return true;
            }
        }
        return false;
    }
    return false;
}
function haveNumber(text){
    if(!isEmpty(text)){
        for(var i = 0; i < text.length; i++){
            if(!isNaN(text.charAt(i)) && text.charAt(i) != " "){
                return true;
            }
        }
        return false;
    }
    return false;
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
    }
    return false;
}
function hasSpecialCharWithoutSpace(text){
    if(text.includes("`") || text.includes("!") ||
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
    }
    return false;
}
function checkDate(date){
    var dateArray = date.split("-");
    if(dateArray[0] > 2004){
        return false;
    }else if(dateArray[0] == 2004 && dateArray[1] > 9){
        return false;
    }else if(dateArray[0] == 2004 && dateArray[1] == 9 && dateArray[2] > 25){
        return false;
    }else{
        return true;
    }
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
function getInputData(){
    var dateArray = dateOfBirth.value.split("-");
    sortedDate = dateArray[1]+ '/' + dateArray[2]+ '/' + dateArray[0];
    var filledAddress = address.value.split(" ").join("%20");
    var data = ["name="+firstName.value, "lastName="+lastName.value,
    "dni="+dni.value, "dob="+sortedDate, "phone="+telephone.value,
    "address="+address.value, "city="+locality.value,"zip="+postalCode.value,
    "email="+email.value,"password="+password.value];
    return data;
}
function dataToQueryParams(inputData){
    return inputData.join('&');
}
function loadFields(fields){
    if(localStorage.length > 0){
        for(var i = 0; i < fields.length; i++){
        fields[i].value = localStorage.getItem(keyName[i]);
        fields[i].classList.add("green-border");
        }
        validFirstName = true;
        validLastName = true;
        validDNI = true;
        validDate = true;
        validTel = true;
        validAddress = true;
        validLocality = true;
        validPostalCode = true;
        validEmail = true;
        validPassword = true;
    }
}