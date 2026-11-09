// MOBILE NAVIGATION MENU

// 1. Select the menu button
const menuToggle = document.querySelector(".menu-toggle");

// 2. Select the navigation menu
const siteNav = document.querySelector(".site-nav");

// 3. Listen for clicks on the menu button
menuToggle.addEventListener("click", function () {

    // Toggle the active class
    siteNav.classList.toggle("active");

    // Check whether the menu is open
    const isOpen = siteNav.classList.contains("active");

    // Update the accessibility attribute
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Update the button label
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    // Change the button symbol
    menuToggle.textContent = isOpen ? "✕" : "☰";

});// FAQ ACCORDION

// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll(".faq-question");

// Loop through each question
faqQuestions.forEach(function (question) {

    // Listen for clicks on each question
    question.addEventListener("click", function () {

        // Find the answer connected to this question
        const answerId = question.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        // Check whether the answer is currently open
        const isOpen = question.getAttribute("aria-expanded") === "true";

        // Open or close the answer
        answer.hidden = isOpen;

        // Update the accessibility attribute
        question.setAttribute("aria-expanded", !isOpen);

        // Change the plus symbol to minus or vice versa
        const icon = question.querySelector(".faq-icon");
        icon.textContent = isOpen ? "+" : "−";

    });

});
// VOLUNTEER FORM VALIDATION
 
// 1. Select the form
const interestForm = document.querySelector("#interest-form");
 
// 2. Select the message area
const formMessage = document.querySelector("#form-message");
 
// 3. Listen for form submission
interestForm.addEventListener("submit", function (event) {
 
    // Prevent the page from refreshing
    event.preventDefault();
 
    // Check whether the form is valid
    if (interestForm.checkValidity()) {
 
        // Display a success message
        formMessage.textContent =
            "Thank you! Your message has passed validation.";
 
        formMessage.style.color = "#14532D";
 
        // Clear the form fields
        interestForm.reset();
 
    } else {
 
        // Display an error message
        formMessage.textContent =
            "Please complete all required fields correctly.";
 
        formMessage.style.color = "#dc2626";
 
        // Show the browser's validation feedback
        interestForm.reportValidity();
 
    }
 
});

