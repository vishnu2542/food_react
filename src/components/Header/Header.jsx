import React from 'react';
import './Header.css';

const Header = () => {
  const handleExploreMenuClick = () => {
    const exploreMenuElement = document.getElementById('explore-menu');
    if (exploreMenuElement) {
      exploreMenuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food </h2>
        <button onClick={handleExploreMenuClick}>Explore Menu</button>
      </div>
    </div>
  );
};

export default Header;
