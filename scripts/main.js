import renderNav from '../modules/navbar.mjs'
import renderAboutPage from '../modules/aboutPage.mjs'
import texts from '../data/texts.mjs'



renderNav()

document.getElementById('lnkAbout').addEventListener('click', renderAboutPage)
//document.getElementById('lnkProducts').addEventListener('click', renderProductsPage)
//document.getElementById('lnkCart').addEventListener('click', renderCartPage)
