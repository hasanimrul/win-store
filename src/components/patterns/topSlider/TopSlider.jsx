import React from "react";
import style from "./TopSlider.module.css";

const TopSlider = () => {
  return (
    <div className={style.sliderContainer + " bg-full-width"}>
      <div className={style.sliderInner + " boxed-content"}>
        <div className={style.sliderContent}>
          <h1>
            Shop{" "}
            <span className={style.blueText}>
              Computer <br /> & experience
            </span>{" "}
          </h1>
          <p>
            You cannot inspect quality into the product; it is already <br />{" "}
            there.
          </p>
          <p>
            I am not a product of my circumstances. I am a product of <br /> my
            decisions.
          </p>

          <button>View More</button>
        </div>
          <div className={style.offerTag}>
            40% <br /> Off
          </div>
      </div>
    </div>
  );
};

export default TopSlider;
