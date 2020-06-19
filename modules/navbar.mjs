const navItems = [
  {
    id:'lnkProducts',
    link: '#',
    text: 'All Products'
  },
  {
    id:'lnkAbout',
    link: '#',
    text: 'About Us'
  },
  {
    id:'lnkCart',
    link: '#',
    text: 'Cart'
  },
]

const renderNav = () => {
  const root = document.getElementById('root')
  const navBar = document.createElement('nav')
  navBar.id = 'nav-bar'

  const navUl = document.createElement('ul')

  for(let navItem of navItems){
    const navBarItem = document.createElement('li')
    const navBarA = document.createElement('a')
    navBarItem.classList.add('nav-item')
    navBarA.classList.add('nav-lin')
    navBarA.id = navItem.id
    navBarA.innerHTML = navItem.text
    navBarA.setAttribute('href', navItem.link)
    navBarItem.append(navBarA)
    navUl.append(navBarItem)
  }

  navBar.append(navUl)
  root.append(navBar)
}


export default renderNav