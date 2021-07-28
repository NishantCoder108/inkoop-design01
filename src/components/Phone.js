import React from "react";
import Mob from "../cssmodule/Mob.module.css";
import ImgCart from "./ImgCart";

import LoremPart from "./LoremPart";
import "./Phone.css";
const Phone = () => {
  return (
    <>
      <div className={Mob.wrapPhone}>
        {/* Navbar own Part  */}

        <div className={Mob.wrapper}>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <nav className={Mob.nav}>
              <div className={Mob.one}></div>
              <div className={Mob.two}></div>
              <div className={Mob.three}></div>
            </nav>
          </label>
          <div className="invisible">
            <ul className="wrapSide">
              <li className="logue">Lorem Ipsum</li>
              <li className="about">About</li>
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

          {/* -------- */}
          <div>
            <h1> Lorem</h1>
          </div>
          <div>
            <img className={Mob.shopImg} src="./shoppingCart.png" />
          </div>
        </div>

        {/* Text Part  */}
        <div className={Mob.text}>
          <h1>What are you having for Lunch ?</h1>
        </div>

        {/* Image  Cart  */}
        <div className={Mob.cartWrap}>
          <ImgCart img="./mexican-taco.jpg" alt="Mexican Taco" />
          <ImgCart img="./farmhouse.jpg" alt="Farmhouse Pizza" />
          <ImgCart img="/chickenBurger.jpg" alt="Chicken Burger" />
          <ImgCart img="./loadedNachos.jpg" alt="Loaded Nachos" />
          {/* <ImgCart img="./hakkaNoodles.jpg" alt="Hakka Noodles" />*/}
        </div>

        <LoremPart />
      </div>
    </>
  );
};

export default Phone;
