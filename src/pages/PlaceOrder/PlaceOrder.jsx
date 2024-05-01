import React from 'react';
import './PlaceOrder.css';
import Navbar from '../../components/Navbar/Navbar';

const PlaceOrder = () => {
  return (
    <>
    <Navbar/>
    <div className="place-order-container">
      <i className="fas fa-check-circle place-order-icon"></i>
      <h2 className="place-order-title">Order Successful!</h2>
      <p className="place-order-message">Thank you for your order.</p>
    </div></>
  );
};

export default PlaceOrder;
