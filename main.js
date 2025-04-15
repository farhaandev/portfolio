const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("menu-open-icon");
const closeIcon = document.getElementById("menu-close-icon");
const navLinks = document.querySelectorAll(".nav-link");

function toggleMenu() {
    mobileMenu.classList.toggle("hidden");
}

// Toggle menu on icon click
menuToggle.addEventListener("click", toggleMenu);

// Close menu when a link is clicked (on mobile only)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            toggleMenu();
        }
    });
});

// Optional: Close menu on resize to desktop view
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove("hidden");
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    } else {
        mobileMenu.classList.add("hidden");
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
});