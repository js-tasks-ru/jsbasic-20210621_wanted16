import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideNumber = 0;
    this.createCarouselSlides();
    this.initSlideArrowEventListener();
    this.updateCarousel();
  }

  createCarouselInner() {
    return createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
  
      <div class="carousel__inner"></div>
    </div>
    `);
  }

  createCarouselSlides() {
    this.elem = this.createCarouselInner();
    let carouselSlides = this.slides.map((slide) => {
      return createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="${slide.name}">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `);
    });

    this.getElementSub('.carousel__inner').append(...carouselSlides);
  }

  initSlideArrowEventListener() {
    this.elem.addEventListener('click', (event) => {
      let target = event.target;

      if ( target.closest('.carousel__button') ) {
        let carouselSlideID = target.closest('.carousel__slide').dataset.id;
        this.elem.dispatchEvent( this.createCustomEvent('product-add', carouselSlideID) );
      }

      if (target.closest('.carousel__arrow_right')) this.nextSlide();
      if (target.closest('.carousel__arrow_left')) this.prevSlide();
    });
  }

  nextSlide() {
    this.currentSlideNumber++;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentSlideNumber--;
    this.updateCarousel();
  }

  updateCarousel() {
    let widthSlide = this.elem.offsetWidth * this.currentSlideNumber;
    this.getElementSub('.carousel__inner').style.transform = `translateX(-${widthSlide}px)`;

    this.currentSlideNumber == 0 ? this.getElementSub('.carousel__arrow_left').style.display = 'none' : this.getElementSub('.carousel__arrow_left').style.display = '';
    this.currentSlideNumber == this.slides.length - 1 ? this.getElementSub('.carousel__arrow_right').style.display = 'none' : this.getElementSub('.carousel__arrow_right').style.display = '';
  }

  createCustomEvent(eventName, eventData) {
    return new CustomEvent(eventName, {
      detail: eventData,
      bubbles: true
    });
  }

  getElementSub(selector) {
    return this.elem.querySelector(selector);
  }
}
