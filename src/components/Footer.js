import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer>
        <div className="container">
          <h3>Travel is for everyone.</h3>
          <ul className="footer-nav nav-left">
              <li><a href="#">About us</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms and conditions</a></li>
          </ul>
          <ul className="footer-nav nav-right">
              <li><a href="#">Press releases</a></li>
              <li><a href="#">Contact Us</a></li>
          </ul>
          <ul className="social-icons">
              <li><a href="#">F</a></li>
              <li><a href="#">L</a></li>
              <li><a href="#">Y</a></li>
              <li><a href="#">I</a></li>
              <li><a href="#">P</a></li>
          </ul>
        </div>
    </footer>
  );
}
