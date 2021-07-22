import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = null;

    if (product) {
      this.elem = this.createCard(product);
    } else {
      console.warn('Нет данных!');
    }
  }

  createCard(product) {
    let card = createElement(`
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="${product.name}">
        <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `);

    this.initProductAddListener(card, product);

    return card;
  }

  createCustomEvent(eventName, eventData) {
    return new CustomEvent(eventName, {
      detail: eventData,
      bubbles: true
    });
  }

  initProductAddListener(card, product) {
    let cardButton = card.querySelector('.card__button');

    cardButton.addEventListener('click', () => {
      this.elem.dispatchEvent( this.createCustomEvent('product-add', product.id) );
    });
  }
}
