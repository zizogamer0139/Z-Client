// ================================
// Mobile Navigation
// ================================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector("nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


// ================================
// Close Mobile Menu
// ================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


// ================================
// Modrinth Button
// ================================

const modrinthURL = "https://modrinth.com/mod/z-client";

const modrinthButton = document.getElementById("modrinthButton");

if (modrinthButton) {

    modrinthButton.href = modrinthURL;
    modrinthButton.target = "_blank";
    modrinthButton.rel = "noopener noreferrer";

}


// ================================
// Reveal Animations
// ================================

const revealElements = document.querySelectorAll(
    ".feature-card, .about-card, .download-card"
);

if ("IntersectionObserver" in window) {

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

}


// ================================
// Current Year
// ================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.textContent =
        `© ${year} Zizo. All Rights Reserved.`;

}