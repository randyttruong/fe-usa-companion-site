import React from 'react';
import './Banner.scss'

function Banner(props) {
  const { title } = props
  return (
    <>
      <div className="banner">
        <h1 className="logo">{title}</h1>
      </div>
    </>
  );
}

export default Banner; 
