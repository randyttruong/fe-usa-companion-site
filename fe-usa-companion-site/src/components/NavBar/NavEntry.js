import React, { useState, useContext } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import './NavEntry.css';

function NavEntry({title, route}) { 
    const [selected, setSelected] = useState(false);

    const handleSelected = () => { 
        setSelected(!selected); 
    }

    return ( 
        <>
            <Link to={route} className="NavEntry" activeClassName="selected">
                <button className={`NavEntry`} onClick={handleSelected}> 
                    <div className="container">
                        <h3>{title}</h3>
                    </div> 
                </button>
            </Link>
        </>
    ); 
} 

export default NavEntry