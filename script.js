const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;

  function showSlide(n) {
      const slides = document.getElementsByClassName("carousel-slide");

      if (n >= slides.length) {
          currentSlide = 0;
      }

      if (n < 0) {
          currentSlide = slides.length - 1;
      }

      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      slides[currentSlide].style.display = "block";
  }

  function nextSlide() {
      currentSlide++;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide--;
      showSlide(currentSlide);
  }

  setInterval(function () {
      nextSlide();
  }, 3000);
});
