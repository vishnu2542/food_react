import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu</h1>
      <p className='explore-menu-text'>Choose from a wide variety</p>
      <div className="explore-menu-list">
        
        <div onClick={() => setCategory(null)} className='explore-menu-list-item'>
          <img className="" src="path_to_all_category_image" alt="" />
          <p>All</p>
        </div>
       
        {menu_list.map((item, index) => (
          <div onClick={() => setCategory(item.menu_name)} key={index} className='explore-menu-list-item'>
            <img className={item.menu_name === "All" ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
