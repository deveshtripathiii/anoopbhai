// =======================
// 🔥 TYPING ANIMATION
// =======================

const texts = [
    "Bike & Scooty Finance Expert with Fast Approval.",
    "Trusted Insurance Services Provider.",
    "Easy EMI Options | Minimum Paperwork.",
    "Helping You Get Your Dream Bike Hassle-Free."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    const display = document.getElementById("typing");

    if (!isDeleting) {
        display.textContent = currentText.substring(0, charIndex++);
    } else {
        display.textContent = currentText.substring(0, charIndex--);
    }

    let speed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        speed = 1200; // pause at full text
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, speed);
}

// =======================
// 🔥 SCROLL ANIMATION
// =======================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
});

// =======================
// 🔥 IMAGE CLICK ZOOM (BONUS)
// =======================

const images = document.querySelectorAll(".card img");

images.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoomed");
    });
});

// =======================
// 🚀 START EVERYTHING
// =======================

window.onload = () => {
    typeEffect();
};
