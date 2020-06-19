import renderNav from '../modules/navbar.mjs'
import renderAboutPage from '../modules/aboutPage.mjs'
import renderProductsPage from '../modules/productsPage.mjs'
import renderCartPage from '../modules/cartPage.mjs'
import cart from '../data/cart.mjs'
import texts from '../data/texts.mjs'
import products from '../data/products.mjs'



renderNav()

document.getElementById('lnkAbout').addEventListener('click', renderAboutPage)
document.getElementById('lnkProducts').addEventListener('click', () => renderProductsPage(products, cart))
document.getElementById('lnkCart').addEventListener('click', () => renderCartPage(cart))
