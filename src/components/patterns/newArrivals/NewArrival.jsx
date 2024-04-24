import React from "react";
import style from "./NewArrival.module.css";
import ProductCard from "@/components/elements/newArrivalCard/ProductCard";

const NewArrival = ({ products }) => {
  console.log("products", products);
  return (
    <div className={style.newArrivalContainer}>
      <div className={style.newArrivalInner + " boxed-content"}>
        <h2 className="title">
          <span className="blue-text">New</span> Arrivals
        </h2>
        <div className={style.productWrapper}>

        {products.slice(0, 9).map((product, i) => (
          <ProductCard product={product} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
