document.addEventListener("DOMContentLoaded", () => {
  let reviewNumber = 0;
  const DOTS = document.querySelectorAll(".testimonials__nav-dot");
  reviewWidth = document.querySelector(".testimonials__review").clientWidth;

  document
    .querySelector(".testimonials__reviews-nav")
    .addEventListener("click", e => {
      if (e.target.className === "testimonials__nav-dot") {
        DOTS[reviewNumber].classList.remove("testimonials__nav-dot_selected");
        for (let i = 0; i < DOTS.length; i++) {
          if (DOTS[i] === e.target) {
            reviewNumber = i;
            DOTS[reviewNumber].classList.add("testimonials__nav-dot_selected");
          }
        }
        document.querySelector(".testimonials__reviews").style.transform =
          "translateX(" + -reviewWidth * reviewNumber + "px)";
      }
    });

  const phoneInput = document.querySelector('input[name=phone]');
  phoneMask = {
    mask: '+{7}(#00)000-00-00',
    definitions: {
      '#': /[9]/,
    },
  }

  IMask(phoneInput, phoneMask);
});
