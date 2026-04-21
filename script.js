/* ==================================================
   CCTVIX - Exact Premium Matching JavaScript
   Professional Business Website Script
================================================== */

/* ===============================
   MOBILE MENU TOGGLE
=============================== */

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


/* ===============================
   STICKY HEADER SHADOW
=============================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    } else {
        header.style.boxShadow = "none";
    }
});


/* ===============================
   SMOOTH SCROLL FOR INTERNAL LINKS
=============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* ===============================
   FAQ SIMPLE INTERACTION
=============================== */

const faqItems = document.querySelectorAll(".faq-box");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("faq-active");
    });
});


/* ===============================
   FADE-IN ON SCROLL
=============================== */

const fadeElements = document.querySelectorAll(
    ".why-card, .category-card, .service-card, .testimonial-card, .faq-box"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.7s ease";
    observer.observe(el);
});


/* ===============================
   BUTTON HOVER MICRO EFFECT
=============================== */

const buttons = document.querySelectorAll(
    ".btn-primary, .btn-outline, .btn-instagram"
);

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });
});


/* ===============================
   ACTIVE NAVIGATION HIGHLIGHT
=============================== */

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
        link.style.color = "#3b82f6";
        link.style.fontWeight = "600";
    }
});


/* ===============================
   CONSOLE BRAND SIGNATURE
=============================== */

console.log(
    "%cCCTVIX | Your Safety, Our Mission",
    "color:#3b82f6; font-size:16px; font-weight:bold;"
);
