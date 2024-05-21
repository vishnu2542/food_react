import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Cart.css';

const Cart = ({ cartItems, setCartItems, isOpen, toggleCart }) => {
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
  };
  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-content">
        <div className="cart-sidebar-header">
          <h2>Cart</h2>
          
          <button onClick={toggleCart}><img src="/close.png" alt="" height="10px" /></button>

        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="item-info">
                  
                  <div className="no"><img src={item.image} alt={item.name} />
                  <button onClick={() => removeFromCart(item._id)}><img src="/recycle-bin.png" alt="" /></button>
                    </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="bu">
                      <button onClick={() => increaseQuantity(item._id)}>+</button>
                    <button onClick={() => decreaseQuantity(item._id)}>-</button>
                    
                    
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
            <div className="total-price">
              <h3>Total Price: ${calculateTotalPrice()}</h3>
              
              <Link to={{ pathname: "/order", state: { cartItems, totalPrice: calculateTotalPrice() } }}>
                <button>Place Order</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
