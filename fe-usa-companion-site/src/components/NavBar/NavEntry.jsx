import React, { useState, useContext } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import './NavEntry.scss';

function NavEntry(props) { 
  const { icon, title, key, route, logo } = props 
    const [selected, setSelected] = useState(false);

    const handleSelected = () => { 
        setSelected(!selected); 
    }

  const renderEntry = () => {  
    if (logo === true) {  
      return (
        <>
          <a className={'entry-logo'} href={route}>
            <div> 
              {title}
            </div>
          </a>
        </>
      ) 
    } else { 
      return ( 
        <>
          <a className={'NavEntry'} href={route} >
            <div className={'icon-container'}>
              {icon}
            </div>
            <div className={'entry-text-container'}> 
              {title}
            </div>
          </a>
        </>

      )
    }
  }

  return ( 
    <>
      {renderEntry()}
    </>
    ); 
} 

export default NavEntry
