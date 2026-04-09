// ==========================================
// 🚀 ANOOP SHUKLA FINANCE - MASTER SCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. DATA FOR BIKES (Manual "Fetch" Logic)
    const bikes = [
        { name: "Hero Splendor+", brand: "Hero", img: "BIKE1.jpg", price: "75,000" },
        { name: "Honda Shine 125", brand: "Honda", img: "BIKE2.jpg", price: "82,000" },
        { name: "Hero Xpulse 200", brand: "Hero", img: "BIKE3.jpg", price: "1,45,000" },
        { name: "Honda Activa 6G", brand: "Honda", img: "BIKE4.jpg", price: "78,000" },
        { name: "Hero Passion Xtec", brand: "Hero", img: "BIKE5.jpg", price: "72,000" },
        { name: "Honda SP 125", brand: "Honda", img: "BIKE2.jpg", price: "86,000" }
    ];

    // 2. RENDER BIKES FUNCTION (Filter System)
    window.renderBikes = function(filter) {
        const container = document.getElementById('bikeGrid');
        if (!container) return;

        container.innerHTML = "";
        const filteredList = filter === 'all' ? bikes : bikes.filter(b => b.brand === filter);

        filteredList.forEach(bike => {
            container.innerHTML += `
                <div class="grid-item ${bike.brand}">
                    <img src="${bike.img}" alt="${bike.name}">
                    <div style="padding:15px;">
                        <h3 style="color:#38bdf8; font-size:18px;">${bike.name}</h3>
                        <p style="color:#ccc; margin:5px 0;">Starting ₹${bike.price}*</p>
                        <button class="btn-green" onclick="enquire('${bike.name}')" 
                            style="background:#22c55e; color:white; border:none; padding:8px 15px; border-radius:20px; cursor:pointer; width:100%; font-weight:bold;">
                            WhatsApp Enquire
                        </button>
                    </div>
                </div>`;
        });
    };

    // 3. WHATSAPP REDIRECT
    window.enquire = function(bikeName) {
        const phone = "918588883074";
        const message = `Hello Anoop Bhai, mujhe "${bikeName}" finance karwani hai. Iska kya process hai?`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    // 4. TYPING ANIMATION
    const phrases = [
        "Bike & Scooty Finance Expert.",
        "Minimum Documentation & Fast Approval.",
        "Trusted Insurance Services in Sultanpur.",
        "Get Your Dream Bike with Easy EMI."
    ];
    let pIdx = 0, cIdx = 0, isDeleting = false;
    const typingElement = document.getElementById('typing');

    function typeEffect() {
        if (!typingElement) return;
        const currentPhrase = phrases[pIdx];
        
        typingElement.innerText = isDeleting 
            ? currentPhrase.substring(0, cIdx--) 
            : currentPhrase.substring(0, cIdx++);

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && cIdx > currentPhrase.length) {
            isDeleting = true;
            speed = 1500; // Pause at end
        } else if (isDeleting && cIdx === 0) {
            isDeleting = false;
            pIdx = (pIdx + 1) % phrases.length;
            speed = 500;
        }
        setTimeout(typeEffect, speed);
    }

    // 5. EMI CALCULATOR LOGIC
    const amtInput = document.getElementById('amount');
    const intInput = document.getElementById('interest');
    const tenInput = document.getElementById('tenure');

    function updateEMI() {
        if (!amtInput) return;
        const P = parseFloat(amtInput.value);
        const R = (parseFloat(intInput.value) / 12) / 100;
        const N = parseFloat(tenInput.value);

        document.getElementById('amtVal').innerText = P.toLocaleString('en-IN');
        document.getElementById('intVal').innerText = intInput.value;
        document.getElementById('tenVal').innerText = N;

        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        document.getElementById('emiDisplay').innerText = "₹" + Math.round(emi).toLocaleString('en-IN');
    }

    // 6. CUSTOM CURSOR & CLICK EXPLOSION (Corners)
    const cursor = document.getElementById('main-cursor');
    
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    document.addEventListener('click', (e) => {
        // Create 10 bikes on click
        for (let i = 0; i < 10; i++) {
            const bike = document.createElement('img');
            bike.src = "bikecursor.jpg"; // Image check kar lena
            bike.className = "mini-bike";
            bike.style.left = e.clientX + 'px';
            bike.style.top = e.clientY + 'px';
            document.body.appendChild(bike);

            // Explosion to random corners
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 1000 + 500;
            const targetX = Math.cos(angle) * distance;
            const targetY = Math.sin(angle) * distance;
            const rotation = Math.random() * 720;

            setTimeout(() => {
                bike.style.transform = `translate(${targetX}px, ${targetY}px) rotate(${rotation}deg)`;
                bike.style.opacity = '0';
            }, 50);

            setTimeout(() => bike.remove(), 1200);
        }
    });

    // 7. SCROLL REVEAL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    // INITIALIZE EVERYTHING
    window.onload = () => {
        typeEffect();
        renderBikes('all');
        if (amtInput) {
            [amtInput, intInput, tenInput].forEach(input => input.oninput = updateEMI);
            updateEMI();
        }
        document.querySelectorAll('section').forEach(section => observer.observe(section));
    };
});
