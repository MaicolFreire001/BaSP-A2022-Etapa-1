window.onload = function() {



}

function validateEmail(emailText){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailText.value.match(emailExpression);
}