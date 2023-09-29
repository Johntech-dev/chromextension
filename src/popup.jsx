import React from 'react'
import { render } from 'react-dom'
function popup() {
  return (
    <div> 
      <h1>Help out</h1>
    </div>
  )
}

render(<Popup />, document.getElementById("react-target"))