import createPageHeader from './pageHeader.mjs'
import texts from '../data/texts.mjs'
import products from '../data/products.mjs'
import renderProductList from './productsList.mjs'

const renderHomePage = (products, cart) => {
  const root = document.getElementById('root')
  const contentContainer = document.getElementById('main') || document.createElement('div')
  contentContainer.id='main';
  contentContainer.innerHTML = '';
  const aboutContent = document.createElement('div')
  aboutContent.classList.add('text-content')
  aboutContent.innerHTML = texts.aboutBody
  contentContainer.append(createPageHeader(texts.homeTitle))
  contentContainer.append(aboutContent)

  const featuredTitle = document.createElement('h2')
  featuredTitle.classList.add('middle-title')
  featuredTitle.innerHTML = 'Featured Products'
  contentContainer.append(featuredTitle)

  contentContainer.append(renderProductList(products.filter(product=>product.featured), cart))
  root.append(contentContainer)
}

export default renderHomePage