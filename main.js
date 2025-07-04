const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
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

// Animaciones ScrollReveal
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

// Animaciones para sección Pitch
ScrollReveal().reveal(".pitch__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".pitch__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".pitch__message", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".pitch__cta", {
  ...scrollRevealOption,
  delay: 1500,
});

// Animaciones para sección Screenshots
ScrollReveal().reveal(".app_screenshots .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".app_screenshots .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".app_screenshots p", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".screenshot__item", {
  ...scrollRevealOption,
  delay: 900,
  interval: 200,
});

// Animaciones para sección de Cómo Funciona
ScrollReveal().reveal(".como_funciona .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".como_funciona .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".como_funciona p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".paso", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 200,
});

// Animaciones para sección de Planes
ScrollReveal().reveal(".planes .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".planes .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".plan", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 300,
});

// Animaciones para sección de Descarga
ScrollReveal().reveal(".download_app .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".download_app .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__buttons", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__web", {
  ...scrollRevealOption,
  delay: 1200,
});
ScrollReveal().reveal(".download__image", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800,
});

// Animaciones para secciones existentes
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

// Animaciones para testimonios
ScrollReveal().reveal(".testimonios .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".testimonios .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".testimonios__slide", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 300,
});

// Animaciones para presentación
ScrollReveal().reveal(".presentacion .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".presentacion .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".presentacion p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".presentacion__image", {
  ...scrollRevealOption,
  origin: "left",
  delay: 800,
});
