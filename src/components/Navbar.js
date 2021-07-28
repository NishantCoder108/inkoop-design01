import React from "react";
import Nav from "../cssmodule/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={Nav.wrapper}>
      <ul>
        <li className={Nav.logo}>Lorem Ipsum</li>
        <li className={Nav.about}>About</li>
        <li className="">Services</li>
        <li className="">Cuisine</li>
        <li className="">Gallery</li>
        <li className="">Contact</li>
        <li className="">Book</li>
        <li className="">
          <button> Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
