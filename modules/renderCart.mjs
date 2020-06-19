const calculateTotalPrice = (productsList) => {
  let sum = 0
  for(let product of productsList){
    sum += product.price
  }
  return sum
}

const renderCart = (products) => {
  const productsContainer = document.createElement('div')
  productsContainer.classList.add('cart-products-container')
  for(let product of products){

    const singleProduct = document.createElement('div')
    singleProduct.classList.add('cart-single-product')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('cart-product-header')
    productTitle.innerHTML = product.name

    const productImg = document.createElement('img')
    productImg.classList.add('cart-product-image')
    productImg.setAttribute("src", product.img)

    const productPrice = document.createElement('div')
    productPrice.classList.add('cart-product-price')
    productPrice.innerHTML = `$${product.price}`

    singleProduct.append(productImg)
    singleProduct.append(productTitle)
    singleProduct.append(productPrice)

    productsContainer.append(singleProduct)
  }

  const totalPrice = document.createElement('div')
  totalPrice.classList.add('cart-total-price')
  totalPrice.innerHTML= `Total Price: $${calculateTotalPrice(products)}`
  productsContainer.append(totalPrice)

  return productsContainer
}


export default renderCart