"use strict"; // forced not to use undeclared code

const inputPassword1 = document.getElementById("password1");
const inputPassword2 = document.getElementById("password2");

const equalityCheck = document.getElementById("equality");
const lowerCaseCheck = document.querySelector("#lowerCase");
const upperCaseCheck = document.querySelector("#upperCase");
const numberCheck = document.querySelector("#numberContained");
const minLengthCheck = document.querySelector("#minLength");

inputPassword1.addEventListener("keyup", pwdEqual);
inputPassword2.addEventListener("keyup", pwdEqual);

function pwdEqual() {
  if (
    inputPassword1.value === inputPassword2.value &&
    inputPassword1.value !== ""
  ) {
    equalityCheck.innerText = "🤙🏻";
    pwdLowerCase();
    pwdUpperCase();
    pwdNumber();
    pwdMinLength();
  } else {
    equalityCheck.innerText = "💩";
    lowerCaseCheck.innerText = "💩";
    upperCaseCheck.innerText = "💩";
    numberCheck.innerText = "💩";
    minLengthCheck.innerText = "💩";
  }
}

function pwdLowerCase() {
  if ((/[a-z]/u).test(inputPassword1.value)) {
    lowerCaseCheck.innerText = "🤙🏻";
  } else {
    lowerCaseCheck.innerText = "💩";
  }
}

function pwdUpperCase() {
  if ((/[A-Z]/u).test(inputPassword1.value)) {
    upperCaseCheck.innerText = "🤙🏻";
  } else {
    upperCaseCheck.innerText = "💩";
  }
}

function pwdNumber() {
  if ((/[0-9]/u).test(inputPassword1.value)) {
    numberCheck.innerText = "🤙🏻";
  } else {
    numberCheck.innerText = "💩";
  }
}

function pwdMinLength() {
  if (inputPassword1.value.length >= 10) {
    minLengthCheck.innerText = "🤙🏻";
  } else {
    minLengthCheck.innerText = "💩";
  }
}

const buttonToggle = document.querySelector("button");
buttonToggle.addEventListener("click", toggleVisibility);

function toggleVisibility() {
  if (inputPassword1.getAttribute("type") === "password") {
    buttonToggle.innerText = "Doing the Britney Spears";
    inputPassword1.setAttribute("type", "text");
    inputPassword2.setAttribute("type", "text");
  } else {
    buttonToggle.innerText = "Push it for glory";
    inputPassword1.setAttribute("type", "password");
    inputPassword2.setAttribute("type", "password");
  }
}
