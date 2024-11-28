onclick = "showPasswordChangeMessage()";

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
  const resetPasswordButton = document.getElementById("resetPasswordButton");

  resetPasswordButton.addEventListener("click", () => {
    // Create a message element
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Password is changed successfully!";
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

    // Append the message element to the body
    document.body.appendChild(messageDiv);

    // Automatically remove the message after 3 seconds
    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  });
});
