import texts from '../data/texts.mjs'
import renderCart from './renderCart.mjs'
import createPageHeader from './pageHeader.mjs'

const renderCartPage = (cart) => {
  const contentContainer = document.getElementById('main') || document.createElement('div')
  contentContainer.id='main';
  contentContainer.innerHTML = '';
  contentContainer.append(createPageHeader(texts.cartTitle))
  contentContainer.append(renderCart(cart))
  root.append(contentContainer)
}



  
  

  

export default renderCartPage