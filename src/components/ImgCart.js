import React from "react";
import Main from "../cssmodule/Mainbar.module.css";
import Mob from "../cssmodule/Mob.module.css";
const ImgCart = (props) => {
  let widthOfScreen = 1300;
  let a;
  {
    a = window.screen.width < widthOfScreen ? Mob : Main;
  }
  return (
    <div className={a.cart}>
      <div>
        <img src={props.img} alt={props.alt} />
      </div>
      <h4>{props.alt} </h4>
    </div>
  );
};

export default ImgCart;
