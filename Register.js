document.addEventListener("DOMContentLoaded", () => {
  const toggleLink = document.querySelector(".doctor-link a"); // Correctly select the "Not a Doctor?" link
  const registerTitle = document.querySelector(".form-container h3"); // Correctly select the "Doctor Register" title

  toggleLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Toggle between "Doctor Register" and "Patient Register"
    if (registerTitle.textContent === "Doctor Register") {
      registerTitle.textContent = "Patient Register";
      toggleLink.textContent = "Not a Patient?";
    } else {
      registerTitle.textContent = "Doctor Register";
      toggleLink.textContent = "Not a Doctor?";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const passwordConfirm = document
      .getElementById("password-confirm")
      .value.trim();

    if (!username || !email || !password || !passwordConfirm) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("Passwords do not match.");
      return;
    }

    // Create a success message
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Sign-up successfully!";
    messageDiv.style.position = "fixed";
    messageDiv.style.top = "0";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translateX(-50%)";
    messageDiv.style.backgroundColor = "#28a745";
    messageDiv.style.color = "#fff";
    messageDiv.style.padding = "10px 20px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    messageDiv.style.zIndex = "1000";
    messageDiv.style.fontSize = "16px";

    // Append the message to the body
    document.body.appendChild(messageDiv);

    // Remove the message after 3 seconds
    setTimeout(() => {
      messageDiv.remove();
    }, 3000);

    // Optionally, reset the form after successful signup
    signupForm.reset();
  });
});
