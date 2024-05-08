import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavEntry from './NavEntry';
import './NavBar.css'; 


function NavBar() {
  const subpages = [
    {
      id: 0,
      title: "Instructions Page",
      route: "/",
    },
    {
      id: 1,
      title: "Homepage",
      route: "/homepageEditor",
    },
    {
      id: 2,  
      title: "About Us",
      route: "/aboutEditor",
    },
    {
      id: 3,  
      title: "Contact Us",
      route: "/contactEditor",
    },
    {
      id: 4,
      title: "Getting Involved",
      route: "/involvedEditor",
    },
  ];

  return (
    <>
      <div className="NavBar">
        <div className="content">
          <div className="blankSpace" />
          {subpages.map((s, i) => {
            if (i !== 0) {
              return (
                <>
                  <NavEntry 
                    title={s.title} 
                    key={`${s.title}_${s.id}_${i}`} 
                    route={s.route} />
                </>
              );
            } else {
              return (
                <>
                  <NavEntry 
                    title={s.title} 
                    key={`${s.title}_${s.id}_${i}`} 
                    route={s.route} />
                  <div className="blankSpace" key={`${s.id}_${i}`}/>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default NavBar 