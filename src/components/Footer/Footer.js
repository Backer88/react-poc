import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="footer is-primary">
        <div className="container">
          <div className="columns">
            <div className="column">This is some text</div>
            <div className="column has-text-right">
              <a href="test" className="icon">
                <i className="fa fa-edit"></i>
              </a>
              <a href="test" className="icon">
                <i className="fa fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
