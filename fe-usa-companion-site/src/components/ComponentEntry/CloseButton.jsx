import React, { useState } from 'react' 
import { FaX } from "react-icons/fa6";
import './ComponentSelectionForm.scss'

function CloseButton(props) {  
  const {  
    toggleOverlay, 
    toggleOverlayHandler
  } = props  
    return (  
    <>  
      <div className={'exit-button'} onClick={toggleOverlayHandler}>  
          <FaX size={12}/> 
      </div>
    </> 
    )
}

export function CloseButtonBar(props) { 
  const {   
    toggleOverlay, 
    toggleOverlayHandler 
  } = props 
  return ( 
    <>  
      <div className={'close-bar'}>   
        <CloseButton  
          toggleOverlayHandler={toggleOverlayHandler}
        /> 
      </div>
    </>
  )
}
