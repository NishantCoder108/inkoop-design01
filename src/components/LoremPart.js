import React from "react";
import Main from "../cssmodule/Mainbar.module.css";
import Mob from "../cssmodule/Mob.module.css";
const LoremPart = () => {
  let widthOfScreen = 1300;
  let cl = window.screen.width < widthOfScreen ? Mob : Main;
  return (
    <div className={cl.lorems}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eos
        officiis dolorum tenetur aut quis?
      </p>
      <hr />
    </div>
  );
};

export default LoremPart;
