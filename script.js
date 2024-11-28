document.addEventListener("DOMContentLoaded", () => {
  // 1. Update the title
  document.title = "HealthStack - Your Health, Our Priority";

  // 2. Change Hero Section Text
  const heroSection = document.querySelector(".hero .container");
  if (heroSection) {
    heroSection.innerHTML = `
        <h1 class="display-4">Your Health, Our Mission</h1>
        <p>We care about your well-being.</p>
      `;
  }

  // 3. Add a new hospital to the Hospitals Section
  const hospitalsList = document.querySelector(".hospitals-list");
  if (hospitalsList) {
    const newHospital = document.createElement("div");
    newHospital.classList.add("hospital");
    newHospital.innerHTML = `
        <img src="./images/new_hospital.jpg" alt="New Hospital" />
        <p>New Life Hospital</p>
      `;
    hospitalsList.appendChild(newHospital);
  }

  // 4. Add a "Contact Us" section
  const contactSection = document.createElement("section");
  contactSection.className = "contact-section py-5 bg-light";
  contactSection.innerHTML = `
      <div class="container">
        <h2>Contact Us</h2>
        <p>Reach out to us for any inquiries or support:</p>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    `;
  document.body.appendChild(contactSection);
});
