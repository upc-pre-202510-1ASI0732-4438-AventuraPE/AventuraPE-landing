const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const faqItems = document.querySelectorAll(".faq-item");
const header = document.querySelector("header");

menuBtn.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
  if (isOpen) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("close");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

function validateContactForm() {
  const name = document.getElementById('contact_name').value;
  const email = document.getElementById('contact_email').value;
  const message = document.getElementById('contact_message').value;

  // Validación de nombre
  if (name.length < 3) {
      showResponse('El nombre debe tener al menos 3 caracteres.');
      return false;
  }

  // Validación de correo electrónico
  if (!validateEmail(email)) {
      showResponse('Por favor, introduce un correo electrónico válido.');
      return false;
  }

  // Simulación de respuesta de envío
  showResponse('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
  return false; // Prevenir el envío del formulario
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showResponse(message) {
  const responseDiv = document.getElementById('contact_response');
  responseDiv.innerText = message;

  // Opcional: Limpiar el formulario después de enviar
  document.getElementById('contact_form').reset();
}

ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .scroll__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .header__socials", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__image-1, .about__image-3", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__image-2", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".contact_us_section", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});
