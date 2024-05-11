import React from 'react'

export function NavBarHeader(props) {   
  const { children } = props 
  return (  
  <> 
      <div className={'nav-bar-header'}>  
        <p>{children}</p>
      </div>
  </> 
  )
}
