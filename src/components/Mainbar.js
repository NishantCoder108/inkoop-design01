import React from "react";
import Main from "../cssmodule/Mainbar.module.css";
import ImgCart from "./ImgCart";
import LoremPart from "./LoremPart";
const Mainbar = () => {
  return (
    <>
      <div className={Main.wrap}>
        <div className={Main.heading}>
          <h1>What are you having for Lunch ?</h1>
        </div>
        <div className={Main.cartWrap}>
          <ImgCart img="./mexican-taco.jpg" alt="Mexican Taco" />
          <ImgCart img="./farmhouse.jpg" alt="Farmhouse Pizza" />
          <ImgCart img="./chickenBurger.jpg" alt="Chicken Burger" />
          <ImgCart img="./loadedNachos.jpg" alt="Loaded Nachos" />
          <ImgCart img="./hakkaNoodles.jpg" alt="Hakka Noodles" />
        </div>

        <LoremPart/>
        
      </div>
    </>
  );
};

export default Mainbar;
