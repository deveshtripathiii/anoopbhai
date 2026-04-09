// ==========================================
// 🚀 ANOOP SHUKLA FINANCE - MASTER SCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. TYPING ANIMATION
    const texts = [
        "Bike & Scooty Finance Expert with Fast Approval.",
        "Trusted Insurance Services Provider.",
        "Easy EMI Options | Minimum Paperwork.",
        "Helping You Get Your Dream Bike Hassle-Free."
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDisplay = document.getElementById("typing");

    function typeEffect() {
        if (!typingDisplay) return;

        const currentText = texts[textIndex];
        if (!isDeleting) {
            typingDisplay.textContent = currentText.substring(0, charIndex++);
        } else {
            typingDisplay.textContent = currentText.substring(0, charIndex--);
        }

        let speed = isDeleting ? 30 : 60;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            speed = 1200; // Poore text par pause
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(typeEffect, speed);
    }

    // 2. SCROLL REVEAL ANIMATION
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });

    // 3. CUSTOM BIKE CURSOR FOLLOW
    const cursor = document.getElementById("main-cursor") || document.getElementById("cursor");
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    }

    // 4. CLICK → MULTIPLE BIKE EXPLOSION (Corners)
    document.addEventListener("click", (e) => {
        for (let i = 0; i < 8; i++) {
            const bike = document.createElement("img");
            bike.src = "bikecursor.jpg"; // Extension check kar lena (.png ya .jpg)
            bike.className = "mini-bike";
            bike.style.left = e.clientX + "px";
            bike.style.top = e.clientY + "px";
            document.body.appendChild(bike);

            // Random targets towards corners/directions
            let targetX = (Math.random() - 0.5) * window.innerWidth * 1.5;
            let targetY = (Math.random() - 0.5) * window.innerHeight * 1.5;

            setTimeout(() => {
                bike.style.transform = `translate(${targetX}px, ${targetY}px) rotate(${Math.random() * 720}deg)`;
                bike.style.opacity = "0";
            }, 50);

            setTimeout(() => bike.remove(), 1200);
        }
    });

    // 5. EMI SLIDER CALCULATOR
    const amount = document.getElementById("amount");
    const rate = document.getElementById("rate");
    const months = document.getElementById("months");

    function updateEMI() {
        if (!amount || !rate || !months) return;

        document.getElementById("amountValue").innerText = amount.value;
        document.getElementById("rateValue").innerText = rate.value;
        document.getElementById("monthValue").innerText = months.value;

        let P = parseFloat(amount.value);
        let R = parseFloat(rate.value) / 1200;
        let N = parseFloat(months.value);

        let emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
        document.getElementById("emiResult").innerText = "Monthly EMI: ₹" + Math.round(emi);
    }

    if (amount) {
        amount.oninput = updateEMI;
        rate.oninput = updateEMI;
        months.oninput = updateEMI;
        updateEMI(); // Pehli baar run karne ke liye
    }

    // Initialize Animations
    typeEffect();
});

// 6. FILTER SYSTEM (Global Scope for Button OnClick)
function filterBike(type) {
    let cards = document.querySelectorAll(".card, .grid-item");
    cards.forEach(card => {
        if (type === "all") {
            card.style.display = "block";
        } else {
            card.classList.contains(type) ? card.style.display = "block" : card.style.display = "none";
        }
    });
}

// 7. WHATSAPP ENQUIRE (Global Scope)
function enquire(name) {
    let msg = `Hello Anoop Bhai, I am interested in ${name}. Please share finance details.`;
    window.open(`https://wa.me/918588883074?text=${encodeURIComponent(msg)}`);
}
