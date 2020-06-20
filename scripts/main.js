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


const markNavBar = (id) => {
  (document.getElementsByClassName('current')[0])&&
  (document.getElementsByClassName('current')[0].classList.remove('current'))
  document.getElementById(id).classList.add('current')
}
markNavBar('lnkHome')

document.getElementById('lnkHome').addEventListener('click', () => {
  markNavBar('lnkHome')
  renderHomePage(products, cart)
})
document.getElementById('lnkAbout').addEventListener('click', () => { 
  markNavBar('lnkAbout')
  renderAboutPage()
})

document.getElementById('lnkProducts').addEventListener('click', () => {
  markNavBar('lnkProducts')
  renderProductsPage(products, cart)
})

document.getElementById('lnkCart').addEventListener('click', () => {
  markNavBar('lnkCart')
  renderCartPage(cart)
})
