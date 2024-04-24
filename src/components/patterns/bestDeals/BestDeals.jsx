"use client";
import React, { useEffect, useState } from "react";
import style from "./BestDeals.module.css";
import Link from "next/link";
import BestDealsCard from "@/components/elements/bestDealsCard/BestDealsCard";

const BestDeals = ({ categories }) => {
  const [activeTab, setActiveTab] = useState("electronics");

  const [products, setProducts] = useState([]);

  console.log("products?????", products);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch(
        `https://fakestoreapi.com/products/category/${activeTab}`
      );
      const data = await results.json();
      setProducts(data);
    };

    fetchData();
  }, [activeTab]);

  return (
    <div className={style.bestDealsContainer}>
      <div className={style.bestDealInner + " boxed-content"}>
        <div className={style.tabPart}>
          <h2 className="title">
            <span className="blue-text">Best</span> Deals
          </h2>
          <ul>
            {categories.map((category, i) => (
              <li
                key={i}
                className={activeTab === category ? style.active : ""}
              >
                <button
                  onClick={() => setActiveTab(category)}
                  className={style.tabLink}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <div className={style.sliderBtn}>
            <img src="/img/bestDeals/leftIcon.svg" />
            <img src="/img/bestDeals/rightIcon.svg" />
          </div>
        </div>
        {activeTab === "electronics" ? (
          <BestDealsCard products={products} />
        ) : null}
        {activeTab === "jewelery" ? (
          <BestDealsCard products={products} />
        ) : null}
        {activeTab === `men's clothing` ? (
          <BestDealsCard products={products} />
        ) : null}
        {activeTab === `women's clothing` ? (
          <BestDealsCard products={products} />
        ) : null}
      </div>
    </div>
  );
};

export default BestDeals;
