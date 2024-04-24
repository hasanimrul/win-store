import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({product}) => {
  return (
    <div className={style.productCard}>
      <p className={style.brand}>{product.category}</p>
      <p className={style.title}>{product.title}</p>
      <img src={product.image} />
      <div className={style.price}>
        {/* <p className={style.oldPrice}>{.}</p> */}
        <p className={style.newPrice}>RS.{product.price}</p>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductCard;
