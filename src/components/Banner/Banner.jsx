import React from "react";
import { hearoArea, blur } from "./Banner.module.css";
import heroImage from "../../assets/images/bg.jpg";

export const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroImage})` }}
      className={hearoArea}
    >
      <div
        className={
          blur + " d-flex align-items-center justify-content-center text-center"
        }
      >
        <div className=" container-fluid ">
          <div className="row">
            <div className="col">
              <h2 className="mb-4 display-4 text-light">
                Welcome to Sports Club
              </h2>
              <button className="btn btn-primary btn-lg">View More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
