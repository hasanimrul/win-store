import React from "react";
import style from "./CategorySlider.module.css";
import CategoryCard from "@/components/elements/categoryCard/CategoryCard";
// import { getServerSideProps } from 'next';

const CategorySlider = ({ categories }) => {
  console.log("categories>>>>", categories);
  return (
    <div className={style.categorySliderContainer + " bg-full-width"}>
      <div>
        <div className={style.categorySliderInner + " boxed-content"}>
          <img src="/img/category/left-arrow.svg" />
          {categories.map((category, i) => (
            <CategoryCard category={category} />
          ))}
          <img src="/img/category/right-arrow.svg" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CategorySlider;
