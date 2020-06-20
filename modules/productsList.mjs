import products from '../data/products.mjs'
import addToCart from './addToCart.mjs'
import renderSingleproduct from './singleProduct.mjs'

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

    const productLightboxLink = document.createElement('a')
    productLightboxLink.setAttribute('href', `#${product.name}`)
    productLightboxLink.classList.add('product-lightbox-link')
    productLightboxLink.onclick = () => {
      document.body.append(renderSingleproduct(product, cart))
    }

    productLightboxLink.append(productImg)
    

    const productPrice = document.createElement('div')
    productPrice.classList.add('single-product-price')
    productPrice.innerHTML = `$${product.price}`

    singleProduct.append(productLightboxLink)
    singleProduct.append(productTitle)
    singleProduct.append(productPrice)
    singleProduct.append(addToCart(product, cart))

    productsContainer.append(singleProduct)
  }

  return productsContainer
}

export default renderProductList