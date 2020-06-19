import popupMsg from './popupMsg.mjs'
import {updateNavCart} from './navbar.mjs'

const addToCart = (product, cart) =>{

  const addToCartBtn = document.createElement('div')
  addToCartBtn.classList.add('single-product-AddToCart')
  addToCartBtn.onclick = () => {
    cart.push(product)
    popupMsg(`${product.name}<br/>Added To Cart!`)
    updateNavCart(cart)
  };
  addToCartBtn.innerHTML = 'Add To Cart'

  return addToCartBtn
}

export default addToCart