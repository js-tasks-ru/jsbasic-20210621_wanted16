function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlides = document.querySelectorAll('.carousel__slide');
  
  const carouselArrows = document.querySelectorAll('.carousel__arrow');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');

  let currentSlide = 0;

  [...carouselArrows].forEach(element => {

    element.addEventListener('click', event => {
      let target = event.target;
      let carouselArrow = target.closest('.carousel__arrow');

      if ( carouselArrow.classList.contains('carousel__arrow_right') ) {
        currentSlide++;
      } else {
        currentSlide--;
      }

      updateSlider(currentSlide);

    });

  });

  function updateSlider(currentSlide) {
    carouselInner.style.transform = `translateX(${-carouselInner.offsetWidth * currentSlide}px)`;
    currentSlide == carouselSlides.length - 1 ? carouselArrowRight.style.display = 'none' : carouselArrowRight.style.display = '';
    currentSlide == 0 ? carouselArrowLeft.style.display = 'none' : carouselArrowLeft.style.display = '';
  }

  updateSlider(currentSlide);
}
