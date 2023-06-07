const passInputElem = document.getElementById("password");
const checkInputElem = document.getElementById("check-password");
const message = document.getElementById("message");
const messageStrElem = document.getElementById("message-strong");
const messageUpperElem = document.getElementById("message-upper");
const listeElem = document.getElementById("list");
const chekText = document.getElementById("test");
const messageNbr = document.getElementById("message-number");

const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function Checking() {
  passInputElem.value != checkInputElem.value
    ? (message.innerHTML = "Passwords don't match!")
    : (message.innerHTML = "");
  return true;
}

function StrongCheck() {
  passInputElem.value.length < 8
    ? (messageStrElem.style.display = "list-item")
    : (messageStrElem.style.display = "none");

  /[A-Z]/.test(passInputElem.value)
    ? (messageUpperElem.style.display = "none")
    : (messageUpperElem.style.display = "list-item");

  specialChars.test(passInputElem.value)
    ? (messageSpeChar.style.display = "none")
    : (messageSpeChar.style.display = "list-item");

  /\d/.test(passInputElem.value)
    ? (messageNbr.style.display = "none")
    : (messageNbr.style.display = "list-item");

  if (
    passInputElem.value.length >= 8 &&
    /[A-Z]/.test(passInputElem.value) === true &&
    specialChars.test(passInputElem.value) === true &&
    /\d/.test(passInputElem.value) === true
  ) {
    chekText.innerHTML = "WHOUA your password is VERY STRONG ! 💪";
    chekText.style.color = "green";
  } else {
    chekText.innerHTML = "Password check :";
    chekText.style.color = "black";
  }
}

console.log(/[A-Z]/.test(passInputElem.value));

passInputElem.addEventListener("keyup", Checking);
passInputElem.addEventListener("keyup", StrongCheck);

checkInputElem.addEventListener("keyup", Checking);
