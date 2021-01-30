"use strict";

// Get Form Elements
var formName = document.getElementById("name");
var formEmail = document.getElementById("email");
var formSubject = document.getElementById("subject");
var formMessage = document.querySelector("textarea");
var formSubmit = document.querySelector("button[type=submit]");
var alertContainer = document.querySelector(".form-alert");
var alertContainerJQ = $(".form-alert");
var formAlert; // Form Submit Button Listener

formSubmit.addEventListener("click", formValidattion); // Form Validation

function formValidattion(e) {
  // Check Empty Fields
  if (formName.value === "" || formEmail.value === "" || formSubject.value === "" || formMessage.value === "") {
    e.preventDefault();
    setAlert("danger", "Error", "All Fields Are Required");
  } // Check Name < 3 Chars
  else if (formName.value.length < 3) {
      e.preventDefault();
      setAlert("danger", "Error", "Name should be more than 3 characters");
    } // Check Email Contain '@' Symbol
    else if (formEmail.value.split("@").length <= 1) {
        e.preventDefault();
        setAlert("danger", "Error", "Enter a correct email");
      } // No Errors
      else {
          e.preventDefault();
          setAlert("success", "Success", "Your message has been sent");
          emptyFields();
        } // Show Alert


  alertContainer.innerHTML = formAlert;
  alertContainerJQ.fadeIn();
} // Empty Fields


function emptyFields() {
  formName.value = "";
  formEmail.value = "";
  formSubject.value = "";
  formMessage.value = "";
} // Set Alert Message


function setAlert($color, $state, $message) {
  formAlert = "<div class=\"alert alert-".concat($color, " alert-dismissible fade show\">\n    <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">\n      &times;\n    </a>\n    <strong>").concat($state, "!</strong> ").concat($message, "\n  </div>");
}