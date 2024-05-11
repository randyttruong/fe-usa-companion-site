import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavEntry from './NavEntry';
import './NavBar.scss'; 
import { FaScroll, FaHouse, FaFaceLaughBeam, FaPhoneVolume, FaHandHoldingHeart } from "react-icons/fa6";
import { NavBarHeader } from './NavBarHeader'


function NavBar() {

  const [selected, setSelected] = useState(-1)

  const subpages = [
    {
      id: -1,
      title: 'Getting Started',
    },
    {
      icon: <FaScroll className={'icon'} size={16}/>, 
      id: 0,
      title: "Instructions",
      route: "/",
    },
    {
      id: -1,
      title: 'Your Pages',
    },
    {
      icon: <FaHouse className={'icon'} size={16}/>,
      id: 1,
      title: "Homepage",
      route: "/homepageEditor",
    },
    {
      icon: <FaFaceLaughBeam className={'icon'} size={16}/>,
      id: 2,  
      title: "About Us",
      route: "/aboutEditor",
    },
    {
      icon: <FaPhoneVolume className={'icon'}size={16}/>,
      id: 3,  
      title: "Contact Us",
      route: "/contactEditor",
    },
    {
      icon: <FaHandHoldingHeart className={'icon'}size={16}/>,
      id: 4,
      title: "Get Involved",
      route: "/involvedEditor",
    },
  ];

  return (
    <>
      <div className="NavBar">
        <div className="content">
          <NavEntry title={'FE USA Companion Site'} logo={true} />
          {subpages.map((s, i) => {
            if (s.id == -1) {  
              return (
                <>
                  <NavBarHeader>{s.title}</NavBarHeader>
                </> 
              ) 
            }
            return (
              <>
                <NavEntry 
                  icon={s.icon}
                  title={s.title} 
                  key={`${s.title}_${s.id}_${i}`} 
                  route={s.route} 
                  logo={false}
                  globalSelected={selected}
                  setGlobalSelected={setSelected}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavBar 
