const passInputElem = document.getElementById("password");
const checkInputElem = document.getElementById("check-password");
const message = document.getElementById("message");

function Checking() {
  passInputElem.value != checkInputElem.value ? (message.innerHTML = "Passwords don't match!") : (message.innerHTML = "");
}

passInputElem.addEventListener("keyup", Checking);
checkInputElem.addEventListener("keyup", Checking);