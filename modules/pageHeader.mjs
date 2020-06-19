const createPageHeader = (header = 'Page Title') => {
  const contentContainer = document.getElementById('root')
  const pageHeader = document.getElementById('page-header') || document.createElement('h1')
  pageHeader.innerHTML = header
  pageHeader.classList.add('page-header')
  return pageHeader
  //contentContainer.append(pageHeader)

}

export default createPageHeader