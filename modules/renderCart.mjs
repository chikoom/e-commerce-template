import removeFromCart from './removeFromCart.mjs'
import {updateNavCart} from './navbar.mjs'

const calculateTotalPrice = (productsList) => {
  let sum = 0
  for(let product of productsList){
    sum += product.price
  }
  return sum
}

const updateCartIds = (cart) => {
  for(let productIndex in cart){
    cart[productIndex].cartId = productIndex
  }
}

const renderCart = (products) => {
  const productsContainer = document.createElement('table')
  productsContainer.classList.add('cart-products-container')

  for(let product of products){

    const singleProduct = document.createElement('tr')
    singleProduct.classList.add('cart-single-product')
    singleProduct.setAttribute('cartId', product.id);

    const productTitle = document.createElement('td')
    productTitle.classList.add('cart-product-header')
    productTitle.innerHTML = product.name

    const productImgCell = document.createElement('td')
    const productImg = document.createElement('img')
    productImg.classList.add('cart-product-image')
    productImg.setAttribute("src", product.img)
    productImgCell.append(productImg)

    
    const productPrice = document.createElement('td')
    productPrice.classList.add('cart-product-price')
    productPrice.innerHTML = `$${product.price*product.amount}`

    const productAmmount = document.createElement('td')
    productAmmount.classList.add('cart-product-ammount')
    productAmmount.innerHTML = product.amount

    const productRemoveCell = document.createElement('td') 
    //const removeItemBtn = () => removeFromCart(product.id, cart)
    productRemoveCell.append(removeFromCart(product.id, products))

    singleProduct.append(productImgCell)
    singleProduct.append(productTitle)
    singleProduct.append(productAmmount)
    singleProduct.append(productPrice)
    singleProduct.append(productRemoveCell)

    productsContainer.append(singleProduct)
  }

  const totalPrice = document.createElement('div')
  totalPrice.classList.add('cart-total-price')
  totalPrice.innerHTML= `Total Price: $${calculateTotalPrice(products)}`
  productsContainer.append(totalPrice)

  updateNavCart(products)

  return productsContainer
}


export default renderCart