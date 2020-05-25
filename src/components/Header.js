import React from "react";
import Logo from '../images/logo.webp';

const brandName = "CuddlyNest";

export default function Header() {
  return (
    <header className="page-header">
        <div className="brand">
            <a href="/"> <img src={Logo} alt={brandName}/> </a>
            <input type="text" className="search" placeholder="Search your destination here"/>
        </div>
        <ul className="nav">
            <li><a href="#">USD</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#" className="list-property">List your property</a></li>
        </ul>
    </header>
  );
}
