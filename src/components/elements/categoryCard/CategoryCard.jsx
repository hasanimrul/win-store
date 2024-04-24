import React from "react";
import style from "./CategoryCard.module.css";

const CategoryCard = ({category}) => {
  return (
    <div>
      <div className={style.cardContainer}>
        {
          category=="electronics" &&  <img src="/img/category/category-img.jpg" /> || category=="jewelery" &&  <img src="/img/category/jwelary.jpg" /> || category=="men's clothing" &&  <img src="/img/category/mens.jpg" /> || category=="women's clothing" &&  <img src="/img/category/womens.png" />
        }
       

        <div className={style.cardContent}>
          <img
            className={style.cornerImg}
            src="/img/category/black-curly.svg"
          />
          <h4>{category}</h4>
          <h4 className={style.blueText}>Shop</h4>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
