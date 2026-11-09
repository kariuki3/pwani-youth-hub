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

});
