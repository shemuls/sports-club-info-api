import React from "react";
import { hearoArea, blur } from "./Banner.module.css";

export const Banner = ({ bg, children }) => {
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className={hearoArea}>
      <div
        className={
          blur + " d-flex align-items-center justify-content-center text-center"
        }
      >
        <div className=" container-fluid ">
          <div className="row">{children}</div>
        </div>
      </div>
    </section>
  );
};
