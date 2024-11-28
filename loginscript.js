// Toggle Password Visibility
function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.classList.remove("bi-eye");
    toggleIcon.classList.add("bi-eye-slash");
  } else {
    passwordField.type = "password";
    toggleIcon.classList.remove("bi-eye-slash");
    toggleIcon.classList.add("bi-eye");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const toggleLink = document.querySelector(".doctor-link a");
  const loginTitle = document.querySelector(".form-container h3");

  toggleLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Toggle between "Login Patient" and "Login Doctor"
    if (loginTitle.textContent === "Login Patient") {
      loginTitle.textContent = "Login Doctor";
      toggleLink.textContent = "Are you a Patient?";
    } else {
      loginTitle.textContent = "Login Patient";
      toggleLink.textContent = "Are you a Doctor?";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleLink = document.querySelector(".doctor-link a");
  const loginTitle = document.querySelector(".form-container h3");

  toggleLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Toggle the header text and link text
    if (loginTitle.textContent === "Login Patient") {
      loginTitle.textContent = "Login Doctor";
      toggleLink.textContent = "Are you a Patient?";
    } else {
      loginTitle.textContent = "Login Patient";
      toggleLink.textContent = "Are you a Doctor?";
    }
  });
});

function togglePassword() {
  const passwordField = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("show-password");
  passwordField.type = showPasswordCheckbox.checked ? "text" : "password";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleLink = document.querySelector(".doctor-link a");
  const loginTitle = document.querySelector(".form-container h3");

  toggleLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Toggle between "Login Patient" and "Login Doctor"
    if (loginTitle.textContent === "Login Patient") {
      loginTitle.textContent = "Login Doctor";
      toggleLink.textContent = "Are you a Patient?";
    } else {
      loginTitle.textContent = "Login Patient";
      toggleLink.textContent = "Are you a Doctor?";
    }
  });
});

function redirectToDashboard(event) {
  // Prevent form from submitting traditionally
  event.preventDefault();

  // Retrieve input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Identify whether the user is logging in as a Patient or Doctor
  const loginTitle = document.querySelector(".form-container h3").textContent;

  // Basic validation (both fields must be filled)
  if (username && password) {
    if (loginTitle === "Login Patient") {
      // Redirect to Patient Dashboard
      window.location.href = "Dashboard.html";
    } else if (loginTitle === "Login Doctor") {
      // Redirect to Doctor Dashboard
      window.location.href = "DoctorDashboard.html";
    }
  } else {
    alert("Please fill in both username and password.");
  }
}
