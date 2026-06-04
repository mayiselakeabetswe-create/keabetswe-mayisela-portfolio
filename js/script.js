console.log("JavaScript file is connected");

// Project search functionality
const projectSearch = document.getElementById("projectSearch");

if (projectSearch) {
  projectSearch.addEventListener("keyup", function () {
    const searchValue = projectSearch.value.toLowerCase();
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {
      const cardText = card.textContent.toLowerCase();

      if (cardText.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// FAQ accordion functionality
const accordionButtons = document.querySelectorAll(".accordion");

accordionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const panel = button.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

// Contact form validation and response
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name.length < 3) {
      formMessage.textContent = "Name must be at least 3 characters long.";
      formMessage.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }

    if (message.length < 10) {
      formMessage.textContent = "Message must be at least 10 characters long.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Message submitted successfully. Thank you for contacting me.";
    formMessage.style.color = "green";

    contactForm.reset();
  });
}