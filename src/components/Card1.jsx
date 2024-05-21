import React from 'react';
import './Card1.css';

const Card = ({ item, addToCart }) => {
  const handleClick = () => {
    addToCart(item);
    alert(`Added ${item.name} to the cart!`);
  };

  return (
<div className='cards-container'>

    <div className="card">
      <img src={item.image} alt={item.name} />
      <div className="card-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className='price'>Price: £{item.price}</p>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div></div> 
  );
};

export default Card;

