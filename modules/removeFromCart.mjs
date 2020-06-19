import popupMsg from './popupMsg.mjs'
import {updateNavCart} from './navbar.mjs'
import renderCartPage from '../modules/cartPage.mjs'



const removeFromCart = (productId, cart) =>{

  const removeItemBtn = document.createElement('div')
  removeItemBtn.classList.add('cart-product-remove')
  removeItemBtn.innerHTML = `Remove it`
  //removeItemBtn.setAttribute('cartId', product.cartId);


  removeItemBtn.onclick = () => {

    for(let productIndex in cart){
      if(cart[productIndex].id === productId){
        popupMsg(`${cart[productIndex].name}<br/>Removed From Cart!`)
        if(cart[productIndex].amount === 1){
          cart.splice(productIndex,1)
        }
        else{
          cart[productIndex].amount -= 1
        }
      }
      
    }
    
    renderCartPage(cart)

    //popupMsg(`${product.name}<br/>Added To Cart!`)
    //updateNavCart(cart)
    
  };

  return removeItemBtn
}

export default removeFromCart