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

