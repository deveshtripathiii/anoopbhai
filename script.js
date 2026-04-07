// Typing Animation

const texts = [
    "Bike & Scooty Finance Expert with Fast Approval and Easy EMI.",
    "Trusted Insurance Services Provider for Your Secure Future.",
    "Minimum Paperwork | Maximum Satisfaction | 100% Reliable Service."
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeEffect() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 1500);
    }

    setTimeout(typeEffect, 40);
}

// Start after page loads
window.onload = typeEffect;