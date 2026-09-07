// ================================
// Mobile Navigation
// ================================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Close mobile menu when clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// ================================
// Modrinth Button
// ================================

// Replace this URL with your actual Modrinth project URL
const modrinthURL = "#";

const modrinthButton = document.getElementById("modrinthButton");

modrinthButton.addEventListener("click", (event) => {

    if (modrinthURL === "#") {

        event.preventDefault();

        alert(
            "ZClient is currently waiting for Modrinth approval. 🚀"
        );

        return;
    }

    modrinthButton.href = modrinthURL;

});


// ================================
// Reveal Animations
// ================================

const revealElements = document.querySelectorAll(
    ".feature-card, .about-card, .download-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ================================
// Current Year
// ================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.textContent =
        `© ${year} Zizo. All Rights Reserved.`;

}