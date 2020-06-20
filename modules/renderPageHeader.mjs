import texts from '../data/texts.mjs'

const renderPageHeader = () => {
  const root = document.getElementById('root')

  const companyNameContainer = document.createElement('div')
  companyNameContainer.classList.add('company-name-container')

  const companyName = document.createElement('h1')
  companyName.classList.add('company-name')
  companyName.innerHTML = texts.companyName.toUpperCase()
  

  const companySlogan = document.createElement('h2')
  companySlogan.classList.add('company-slogan')
  companySlogan.innerHTML = texts.companySlogan


  const heroImage = document.createElement('header')
  heroImage.classList.add('hero-image')

  companyNameContainer.append(companyName)
  companyNameContainer.append(companySlogan)
  heroImage.append(companyNameContainer)

  root.append(heroImage)
}


export default renderPageHeader