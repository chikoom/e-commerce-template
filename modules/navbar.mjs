const navItems = [
  {
    id:'lnkHome',
    link: '#',
    text: 'Home'
  },
  {
    id:'lnkAbout',
    link: '#',
    text: 'About Us'
  },
  {
    id:'lnkProducts',
    link: '#',
    text: 'All Products'
  },
  {
    id:'lnkCart',
    link: '#',
    text: 'Cartd'
  },
]

const renderNav = (cart) => {
  const root = document.getElementById('root')
  const navBar = document.createElement('nav')
  navBar.id = 'nav-bar'

  const navUl = document.createElement('ul')

  for(let navItem of navItems){
    const navBarItem = document.createElement('li')
    const navBarA = document.createElement('a')
    navBarItem.classList.add('nav-item')
    navBarA.classList.add('nav-link')
    navBarA.id = navItem.id
    navBarA.innerHTML = navItem.text
    navBarA.setAttribute('href', navItem.link)
    navBarItem.append(navBarA)
    navUl.append(navBarItem)
  }

  navBar.append(navUl)
  root.append(navBar)
  updateNavCart(cart)
}

export const updateNavCart = (cart) => {
  let proSum = 0
  for(let product of cart){
    proSum += product.amount
  }
  const cartItem = document.getElementById('lnkCart')
  cartItem.innerHTML = (proSum > 0) ? `Cart <span id="navCartItems"> (${proSum})</span>` : 'Cart'
}


export default renderNav

 