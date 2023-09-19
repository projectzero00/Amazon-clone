export let cart = JSON.parse(localStorage.getItem('cart'))
    || [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
    }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }];;


function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export let addToCart = (productId) => {
    let matchingProduct
    const select = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

    cart.forEach(cartItem => {
        if (cartItem.productId === productId) {
            matchingProduct = cartItem;
        }
    })
    if (matchingProduct) {
        matchingProduct.quantity += select;
    } else {
        const newProduct = {
            productId: productId,
            quantity: select
        }
        cart.push(newProduct);
    }
    saveCart();
}

export const removeFromCart = (productId) => {
    let newCart = [];
    cart.forEach(cartItem => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    })
    cart = newCart;
    saveCart();
}

export let updateCartQuantity = (selector) => {
    let cartQuantity = 0;
    cart.forEach(cartItem => {
      cartQuantity += cartItem.quantity;
      document.querySelector(selector).textContent = cartQuantity
      
    })
  }

  export let updateQuantity = (productId, newQuantity) => {
    cart.forEach(cartItem => {
      if (cartItem.productId === productId) {
        cartItem.quantity = parseInt(newQuantity);
      }
    })
    saveCart();
  }

