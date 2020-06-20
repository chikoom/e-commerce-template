import addToCart from './addToCart.mjs'

const renderSingleproduct = (product, cart) => {
  const singleProductLightbox = document.createElement('div')
  singleProductLightbox.classList.add('single-product-lightbox')

  const singleProductWrapper = document.createElement('div')
  singleProductWrapper.classList.add('single-product-wrapper')

  const singleProductImage = document.createElement('img')
  singleProductImage.classList.add('single-product-image')
  singleProductImage.setAttribute('src', product.img)

  const singleProductTitle = document.createElement('h2')
  singleProductTitle.classList.add('single-product-title')
  singleProductTitle.innerHTML = product.name

  const singleProductDescription = document.createElement('p')
  singleProductDescription.classList.add('single-product-description')
  singleProductDescription.innerHTML = product.description

  const singleProductPrice = document.createElement('div')
  singleProductPrice.classList.add('single-product-price')
  singleProductPrice.innerHTML = `$${product.price}`

  const singleProductClose = document.createElement('div')
  singleProductClose.classList.add('single-product-close')
  singleProductClose.innerHTML = 'X'

  singleProductWrapper.append(singleProductImage)
  singleProductWrapper.append(singleProductTitle)
  singleProductWrapper.append(singleProductDescription)
  singleProductWrapper.append(singleProductPrice)
  singleProductWrapper.append(addToCart(product, cart))
  singleProductWrapper.append(singleProductClose)
  singleProductLightbox.append(singleProductWrapper)

  singleProductClose.onclick = () => {
    singleProductLightbox.remove()
  }

  return singleProductLightbox

}

export default renderSingleproduct