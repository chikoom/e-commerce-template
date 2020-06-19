const popupMsg = (message) =>{

  const popupLightbox = document.createElement('div')
  popupLightbox.id = 'popup-lightbox'

  const popupContainer = document.createElement('div')
  popupContainer.id = 'popup-container'

  const popupText = document.createElement('p')
  popupText.id = 'popup-text'
  popupText.innerHTML = message
  
  

  popupContainer.append(popupText)
  popupLightbox.append(popupContainer)
  document.body.append(popupLightbox)

  setTimeout(function(){ document.body.removeChild(popupLightbox); }, 2000);


}

export default popupMsg