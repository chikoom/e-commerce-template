import products from '../data/products.mjs'
import addToCart from './addToCart.mjs'

const renderProductList = (products, cart) => {
  const productsContainer = document.createElement('div')
  productsContainer.classList.add('products-container')
  for(let product of products){

    const singleProduct = document.createElement('div')
    singleProduct.classList.add('single-product-container')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('single-product-header')
    productTitle.innerHTML = product.name

    const productImg = document.createElement('img')
    productImg.classList.add('single-product-image')
    productImg.setAttribute("src", product.img)

    const productPrice = document.createElement('div')
    productPrice.classList.add('single-product-price')
    productPrice.innerHTML = `$${product.price}`

    // const addToCartBtn = document.createElement('div')
    // addToCartBtn.classList.add('single-product-AddToCart')
    // addToCartBtn.onclick = () => {
    //   cart.push(product)
    // };
    // addToCartBtn.innerHTML = 'Add To Cart'

    singleProduct.append(productImg)
    singleProduct.append(productTitle)
    singleProduct.append(productPrice)
    singleProduct.append(addToCart(product, cart))

    productsContainer.append(singleProduct)
  }

  return productsContainer
}

export default renderProductList