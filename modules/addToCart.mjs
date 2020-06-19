import popupMsg from './popupMsg.mjs'
import {updateNavCart} from './navbar.mjs'



const addToCart = (product, cart) =>{

  const addToCartBtn = document.createElement('div')
  addToCartBtn.classList.add('single-product-AddToCart')
  addToCartBtn.onclick = () => {
    let foundProduct = false
    for(let existingProduct of cart){
      if(existingProduct.id === product.id){
        existingProduct.amount++
        foundProduct = true
      }
    }
    if(!foundProduct){
      product.amount = 1
      cart.push(product)
    }
    popupMsg(`${product.name}<br/>Added To Cart!`)
    updateNavCart(cart)
  };
  addToCartBtn.innerHTML = 'Add To Cart'

  return addToCartBtn
}

export default addToCart