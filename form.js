const form = document.getElementById("contactForm");
const successMsg = document.getElementById("success");

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}Error`);
  error.textContent = message;
  field?.classList.add("error");
}

function clearErrors() {
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();
  let isValid = true;

  const firstName = form.firstName;
  const lastName = form.lastName;
  const email = form.email;
  const message = form.message;
  const consent = form.consent;

  if (!firstName.value.trim()) {
    showError("firstName", "This field is required");
    isValid = false;
  }
  if (!lastName.value.trim()) {
    showError("lastName", "This field is required");
    isValid = false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailPattern.test(email.value)) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  }

  if (
    ![...form.querySelectorAll('input[name="queryType"]')].some(
      (r) => r.checked
    )
  ) {
    document.getElementById("queryTypeError").textContent =
      "Please select a query type";
    isValid = false;
  }

  if (!message.value.trim()) {
    showError("message", "This field is required");
    isValid = false;
  }

  if (!consent.checked) {
    document.getElementById("consentError").textContent =
      "To submit this form, please consent to be contacted";
    isValid = false;
  }

  if (isValid) {
    successMsg.style.display = "block";
  }
});
