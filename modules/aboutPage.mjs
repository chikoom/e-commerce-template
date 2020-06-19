import createPageHeader from './pageHeader.mjs'
import texts from '../data/texts.mjs'

const renderAboutPage = () => {
  const root = document.getElementById('root')
  const contentContainer = document.getElementById('main') || document.createElement('div')
  contentContainer.id='main';
  contentContainer.innerHTML = '';
  const aboutContent = document.createElement('div')
  aboutContent.classList.add('text-content')
  aboutContent.innerHTML = texts.aboutBody
  contentContainer.append(createPageHeader(texts.aboutTitle))
  contentContainer.append(aboutContent)
  root.append(contentContainer)
}

export default renderAboutPage