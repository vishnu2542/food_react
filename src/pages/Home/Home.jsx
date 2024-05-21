import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { food_list } from '../../assets/assets';
import FoodMenu from '../../components/FoodMenu';
import Navbar from '../../components/Navbar/Navbar';
import CartSidebar from '../Cart/Cart';
import Footer from '../../components/Footer';

const Home = () => {
  const [category, setCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem._id === item._id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} toggleCart={toggleCart} /> 
      <div>
        <Header />
        <ExploreMenu setCategory={setCategory} />
      </div>
      <div className="app card-container">
        {food_list
          .filter(food => category === null || food.category === category)
          .map((food, index) => (
            <FoodMenu key={index} foodList={[food]} category={food.category} addToCart={addToCart} />
          ))}
      </div>
      <CartSidebar cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} toggleCart={toggleCart} /> 
      <Footer/>
    </>
  );
};

export default Home;

