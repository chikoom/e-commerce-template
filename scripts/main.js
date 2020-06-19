import renderPageHeader from '../modules/renderPageHeader.mjs'
import renderHomePage from '../modules/homePage.mjs'
import renderNav from '../modules/navbar.mjs'
import renderAboutPage from '../modules/aboutPage.mjs'
import renderProductsPage from '../modules/productsPage.mjs'
import renderCartPage from '../modules/cartPage.mjs'
import cart from '../data/cart.mjs'
import products from '../data/products.mjs'


renderPageHeader()
renderNav(cart)
renderHomePage(products, cart)

document.getElementById('lnkHome').addEventListener('click', () => renderHomePage(products, cart))
document.getElementById('lnkAbout').addEventListener('click', renderAboutPage)
document.getElementById('lnkProducts').addEventListener('click', () => renderProductsPage(products, cart))
document.getElementById('lnkCart').addEventListener('click', () => renderCartPage(cart))
