import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-100 text-base-content border-t border-base-300">
      <div>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by John Grahn</p>
      </div>
    </footer>
  );
};

export default Footer;
