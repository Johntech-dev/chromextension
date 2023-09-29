import React from 'react'
import './Button.css'
function AddtoChromeButton() {
  const handleInstallClick = () => {
    window.open('https://chrome.google.com/webstore/detail/gocnddiglbpjahlkcehflibgfibohjla', '_blank');
  };
  return (
    <div>
      <button className='addtochrome' onClick={handleInstallClick}>Add to Chrome</button>
    </div>
  )
}

export default AddtoChromeButton
