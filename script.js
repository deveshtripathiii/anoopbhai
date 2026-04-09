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
// ==========================
// CUSTOM BIKE CURSOR
// ==========================

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ==========================
// CLICK TRAIL EFFECT
// ==========================

document.addEventListener("click", (e) => {

    const bike = document.createElement("img");
    bike.src = "bike-cursor.png";
    bike.classList.add("trail-bike");

    bike.style.left = e.clientX + "px";
    bike.style.top = e.clientY + "px";

    document.body.appendChild(bike);

    setTimeout(() => {
        bike.remove();
    }, 1000);
});
// ==========================
// CURSOR FOLLOW
// ==========================
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ==========================
// CLICK → MULTIPLE BIKE RUN
// ==========================

document.addEventListener("click", (e) => {

    for (let i = 0; i < 6; i++) {

        const bike = document.createElement("img");
        bike.src = "bikecursor.jpg";
        bike.classList.add("mini-bike");

        bike.style.left = e.clientX + "px";
        bike.style.top = e.clientY + "px";

        document.body.appendChild(bike);

        // Random direction (corners)
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        setTimeout(() => {
            bike.style.transform = `translate(${x - e.clientX}px, ${y - e.clientY}px)`;
            bike.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            bike.remove();
        }, 1000);
    }
});
// FILTER SYSTEM
function filterBike(type){
    let cards=document.querySelectorAll(".card");

    cards.forEach(card=>{
        if(type==="all"){
            card.style.display="block";
        }else{
            if(card.classList.contains(type)){
                card.style.display="block";
            }else{
                card.style.display="none";
            }
        }
    });
}

// WHATSAPP ENQUIRE
function enquire(name){
    let msg=`Hello Sir, I am interested in ${name}`;
    window.open(`https://wa.me/918588883074?text=${encodeURIComponent(msg)}`);
}

// EMI SLIDER
let amount=document.getElementById("amount");
let rate=document.getElementById("rate");
let months=document.getElementById("months");

function updateEMI(){
    document.getElementById("amountValue").innerText=amount.value;
    document.getElementById("rateValue").innerText=rate.value;
    document.getElementById("monthValue").innerText=months.value;

    let P=amount.value;
    let R=rate.value/1200;
    let N=months.value;

    let emi=P*R*Math.pow(1+R,N)/(Math.pow(1+R,N)-1);

    document.getElementById("emiResult").innerText="EMI: ₹"+Math.round(emi);
}

amount.oninput=updateEMI;
rate.oninput=updateEMI;
months.oninput=updateEMI;

updateEMI();
