// launch modal
const modalBtn = document.getElementById("contact_button");
modalBtn.addEventListener("click", displayModal);
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

// close modal
const modalCloseBtn = document.getElementById("close_btn");
modalCloseBtn.addEventListener("click", closeModal);
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

// Form input
const checkFirstName = function (inputFirstName) {
  const errorMessageFirstName = document.querySelector(
    ".error_message_firstName"
  );
  if (inputFirstName.length < 2 || inputFirstName === "") {
    errorMessageFirstName.style.display = "inline-block";
    document.querySelector(".error_outline_firstName").style.outline =
      "1px solid #901C1C";
    return false;
  }
  errorMessageFirstName.style.display = "none";
  document.querySelector(".error_outline_firstName").style.outline = "none";
  return true;
};

const checkLastName = function (inputLastName) {
  const errorMessageFirstName = document.querySelector(
    ".error_message_lastName"
  );
  if (inputLastName.length < 2 || inputLastName === "") {
    errorMessageFirstName.style.display = "inline-block";
    document.querySelector(".error_outline_lastName").style.outline =
      "1px solid #901C1C";
    return false;
  }
  errorMessageFirstName.style.display = "none";
  document.querySelector(".error_outline_lastName").style.outline = "none";
  return true;
};

const checkEmail = function (inputEmail) {
  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const errorMessageEmail = document.querySelector(".error_message_email");
  if (validRegex.test(emailInput)) {
    errorMessageEmail.style.display = "none";
    document.querySelector(".error_ouline_email").style.outline = "none";
    return true;
  } else {
    errorMessageEmail.style.display = "inline-block";
    document.querySelector(".error_outline_email").style.outline =
      "1px solid #901C1C";
    return false;
  }
};

const checkMessage = function (inputMessage) {
  const errorMessageMessage = document.querySelector(".error_message_message");
  if (inputMessage.length > 1000) {
    errorMessageMessage.style.display = "inline-block";
    document.querySelector(".error_outline_message").style.outline =
      "1px solid #901C1C";
    return false;
  }
  errorMessageMessage.style.display = "none";
  document.querySelector(".error_outline_message").style.outline = "none";
  return true;
};

// Form validation
const submitBtn = document.getElementById("submit_button");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let firstNameValue = document.getElementById("firstName").value;
  let lastNameValue = document.getElementById("lastName").value;
  let emailValue = document.getElementById("email").value;
  let messageValue = document.getElementById("message").value;

  if (
    checkFirstName(firstNameValue) === true &&
    checkLastName(lastNameValue) === true &&
    checkEmail(emailValue) === true &&
    checkMessage(messageValue) === true
  ) {
    return console.log(firstNameValue, lastNameValue, emailValue, messageValue);
  }
});

// Accessibilité par clavier
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    return closeModal();
  }
});

submitBtn.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    return console.log(firstNameValue, lastNameValue, emailValue, messageValue);
  }
});

modalCloseBtn.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    return closeModal();
  }
});

// Trap focus inside modal

const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector(".modal");

const firstFocusableElement = document.querySelector("#firstName"); // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

document.addEventListener("keydown", function (e) {
  let isTabPressed = e.key === "Tab" || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else {
    // if tab key is pressed
    if (document.activeElement === lastFocusableElement) {
      // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();
