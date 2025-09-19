(function() {

"use strict"

let form = document.querySelector('#contact-form');

document
.querySelector("#contact-form-button")
.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    let formValid = true;
    if (!form.checkValidity()) {
      formValid = false;
    }
    form.classList.add("was-validated");
    if (formValid) {
      sendTheEmail();
    }
});

function sendTheEmail(){
    
}

}());