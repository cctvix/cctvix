/* ================================= */
/* CCTVIX PREMIUM PROFESSIONAL JS */
/* ================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ============================= */
  /* Sticky Header Shadow */
  /* ============================= */

  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    } else {
      header.style.boxShadow = "none";
    }
  });


  /* ============================= */
  /* Smooth Scroll for Internal Links */
  /* ============================= */

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  /* ============================= */
  /* Simple Fade-in Animation on Scroll */
  /* ============================= */

  const animatedItems = document.querySelectorAll(
    ".service-card, .product-card, .why-card, .testimonial-card, .faq-box"
  );

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

  animatedItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s ease";
    observer.observe(item);
  });


  /* ============================= */
  /* WhatsApp Quick Action */
  /* ============================= */

  const whatsappButtons = document.querySelectorAll(".btn-whatsapp");

  whatsappButtons.forEach(button => {
    button.addEventListener("click", function () {
      console.log("WhatsApp button clicked");
    });
  });


  /* ============================= */
  /* Instagram Buy Button Tracking */
  /* ============================= */

  const instaButtons = document.querySelectorAll(
    ".btn-instagram, .nav-btn"
  );

  instaButtons.forEach(button => {
    button.addEventListener("click", function () {
      console.log("Instagram Buy button clicked");
    });
  });


  /* ============================= */
  /* Contact Form Validation
     (future contact form support)
  /* ============================= */

  const contactForm = document.querySelector("form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = contactForm.querySelectorAll("input, textarea");
      let valid = true;

      inputs.forEach(input => {
        if (input.value.trim() === "") {
          valid = false;
          input.style.border = "1px solid red";
        } else {
          input.style.border = "1px solid rgba(255,255,255,0.1)";
        }
      });

      if (valid) {
        alert("Your inquiry has been submitted successfully!");
        contactForm.reset();
      } else {
        alert("Please fill all required fields.");
      }
    });
  }


  /* ============================= */
  /* Auto Year in Footer (optional)
  /* ============================= */

  const yearBox = document.querySelector(".current-year");

  if (yearBox) {
    yearBox.textContent = new Date().getFullYear();
  }

});
