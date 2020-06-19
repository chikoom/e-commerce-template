import texts from '../data/texts.mjs'
import renderProductList from './productsList.mjs'
import createPageHeader from './pageHeader.mjs'


const renderProductsPage = (products, cart) => {
  const contentContainer = document.getElementById('main') || document.createElement('div')
  contentContainer.id='main';
  contentContainer.innerHTML = '';
  contentContainer.append(createPageHeader(texts.productsTitle))
  contentContainer.append(renderProductList(products, cart))
  root.append(contentContainer)
}


export default renderProductsPage

