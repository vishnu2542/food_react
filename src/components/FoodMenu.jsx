import React from 'react';
import Card from './Card1';
import './FoodMenu.css';

const FoodMenu = ({ foodList, category, addToCart }) => {
  const filteredItems = foodList.filter(item => item.category === category).slice(0, 6);

  return (
    // <div className="food-menu">
      
      <div>
        {filteredItems.map(item => (
          <Card key={item._id} item={item} addToCart={addToCart} />
        ))}
      </div>
  );
};

export default FoodMenu;

