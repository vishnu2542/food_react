import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Location.css';

function LocationPage() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.toLowerCase() === 'rajpura') {
      navigate('/restaurant');
    } 
    else if(location.toLocaleLowerCase()==='chandigarh'){
      navigate('/res');
    }

    else if(location.toLocaleLowerCase()==='patiala'){
      navigate('/rest');
    }
    else {
      alert('Sorry, we don\'t have restaurants in your location.');
    }
  };

  return (
    <>
      <div className="heade">
        <button className="signin-btn" onClick={() => navigate('/signin')}>Sign In</button>
      </div>
      <img className="bg-image" src="../ff.png" alt="Background" />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="input-field"
          />
          <br />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default LocationPage;
