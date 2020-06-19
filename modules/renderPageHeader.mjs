

const renderPageHeader = () => {
  const root = document.getElementById('root')
  const heroImage = document.createElement('header')
  heroImage.classList.add('hero-image')
  root.append(heroImage)
}


export default renderPageHeader