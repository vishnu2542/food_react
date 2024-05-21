import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
          <img src="/f1.png" alt="Facebook" />
        </a>
        <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
          <img src="/t.png" alt="Twitter" />
        </a>
        <a href="https://example.com/linkedin" target="_blank" rel="noopener noreferrer">
          <img src="/l.png" alt="LinkedIn" />
        </a>
        <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">
          <img src="/i.png" alt="Instagram" />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Foodzy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



