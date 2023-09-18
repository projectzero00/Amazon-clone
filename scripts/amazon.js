import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';

let productsHTML = ``;

products.forEach(product => {
  productsHTML += `
    <article class="product-container">
          <figure class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </figure>

          <p class="product-name limit-text-to-2-lines">
            ${product.name}
          </p>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <p class="product-rating-count link-primary">
              ${product.rating.count}
            </p>
          </div>

          <p class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </p>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <figure class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </figure>

          <button class="add-to-cart-button button-primary" data-id="${product.id}">
            Add to Cart
          </button>
        </article>
    `

});
document.querySelector('.products-grid').innerHTML = productsHTML

let updateCartQuantity = () => {
  let cartQuantity = 0;
  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
  })
}

document.querySelectorAll('.add-to-cart-button').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.id;

    addToCart(productId)
    updateCartQuantity()
    document.querySelector(`.js-added-to-cart-${productId}`).classList.add('added')
    let timeout = setTimeout(() => {
      clearTimeout(timeout)
      document.querySelector(`.js-added-to-cart-${productId}`).classList.remove('added')
    }, 2000)
  })
})
