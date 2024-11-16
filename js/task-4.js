const loginForm = document.querySelector("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements["email"];
  const passwordInput = logimForm.elements["password"];
  const emailValue = loginForm.value.trim();
  const passwordValue = loginForm.value.trim();

  if (emailValue === "" || passwordValue == "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  loginForm.reset();
});