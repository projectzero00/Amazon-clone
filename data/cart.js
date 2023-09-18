export const cart = [];

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
}