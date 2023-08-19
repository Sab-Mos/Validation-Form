const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();

  if (usernameValue === "") {
    setError(userName, "Username cannot be blank");
  } else {
    setSuccess(userName);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Email is not valid");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be blank");
  } else {
    setSuccess(password);
  }

  if (passwordValue2 === "") {
    setError(password2, "Password2 cannot be blank");
  } else if (passwordValue !== passwordValue2) {
    setError(password2, "Passwords do not match");
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.visibility = "visible";
  small.style.color = "red";
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = "";
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
