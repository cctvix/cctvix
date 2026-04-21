/* ==================================================
   CCTVIX - Final Exact Premium script.js
   FAQ Accordion + Mobile Menu + Premium Effects
================================================== */


/* ===============================
   MOBILE MENU TOGGLE
=============================== */

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}


/* ===============================
   STICKY HEADER SHADOW
=============================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
        } else {
            header.style.boxShadow = "none";
        }
    }
});


/* ===============================
   FAQ ACCORDION TOGGLE
=============================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (question) {
        question.addEventListener("click", () => {

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    }
});


/* ===============================
   FADE-IN ON SCROLL
=============================== */

const fadeElements = document.querySelectorAll(
    ".why-card, .category-card, .service-card, .testimonial-card, .faq-item"
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
   BUTTON MICRO HOVER EFFECT
=============================== */

const buttons = document.querySelectorAll(
    ".btn-primary, .btn-outline, .btn-instagram, .btn-whatsapp"
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
   ACTIVE NAVIGATION LINK
=============================== */

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
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
/* =========================================
   MOBILE MENU FIX ONLY
========================================= */

const menuBtn = document.querySelector(".menu-icon");
const mobileNavbar = document.querySelector(".navbar");

if (menuBtn && mobileNavbar) {
    menuBtn.addEventListener("click", () => {
        mobileNavbar.classList.toggle("active");
    });
}
