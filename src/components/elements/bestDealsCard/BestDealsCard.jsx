import React from "react";
import style from "./BestDealsCard.module.css";

const BestDealsCard = ({products}) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.firstPart}>
        <div className={style.topCard + " card-border"}>
          <div className={style.leftPart}>
            <span>
              {products[0]?.title}
            </span>
            <span className={style.bluePrice}>Rs.{products[0]?.price} </span>
            <span>
              Rs. <span className="cross-text">66,000</span>
            </span>
            <span className={style.offerTag}>
              Save <br /> 10%
            </span>
          </div>
          <div className={style.rightPart}>
            <span className={style.specialOffer}>
              <span className="blue-text">Special</span> <br /> Offer
            </span>
            <img src={products[0]?.image} />
          </div>
        </div>

        <div className={style.bottomCard + " card-border"}>
          <div className={style.leftPart}>
            <span className={style.specialOffer}>
              <span className="red-text">Special</span> <br /> Offer
            </span>
            <span>{products[1]?.title}</span>
            <span className={style.redPrice}>Rs{products[1]?.price} </span>
            <span>
              Rs. <span className="cross-text">66,000</span>
            </span>
            <span className="blue-text">Already Sold: 6</span>
            <span className="blue-text">Available: 30</span>
          </div>
          <div className={style.rightPart}>
            <span className={style.circleOfferTag}>
              Save <br /> 10%
            </span>
            <img src={products[1]?.image} />
          </div>
        </div>
      </div>
      <div className={style.secondPart + " card-border"}>
        <span className={style.redSpecialOffer}>
          <span className="red-text">Special</span> <br /> Offer
        </span>
        <img src={products[3]?.image} />
        <p>{products[3]?.title}</p>
        <span className={style.redPrice}>Rs.{products[3]?.price} </span>
        <span>
          Rs. <span className="cross-text">66,000</span>
        </span>
        <span className={style.redCircleOfferTag}>
          Save <br /> 10%
        </span>
        <div className={style.orderStatus}>
          <span className="blue-text">Already Sold: 6</span>
          <span className="blue-text">Available: 30</span>
        </div>
      </div>

      <div className={style.thirdPart}>
        <div className={style.topCard + " card-border"}>
          <div className={style.leftPart}>
            <span>
            {products[4]?.title}
            </span>
            <span className={style.bluePrice}>Rs.{products[4]?.price} </span>
            <span>
              Rs. <span className="cross-text">66,000</span>
            </span>
            <span className={style.gradientOfferTag}>
              Save <br /> 10%
            </span>
          </div>
          <div className={style.rightPart}>
            <span className={style.specialOffer}>
              <span className="blue-text">Special</span> <br /> Offer
            </span>
            <img src={products[3]?.image} />
          </div>
        </div>
        <div className={style.bottomCard + " card-border"}>
          <div>
            <span className={style.redSpecialOffer}>
              <span className="red-text">Special</span> <br /> Offer
            </span>
            {
              products[5]?.image ?
              <img className={style.lastProduct} src={products[5]?.image} /> : <img src="/img/bestDeals/no-image.png"/>
            }
            <p>{products[5]?.title}</p>
            <span className={style.yellowPrice}>Rs.{products[5]?.price} </span> {" "}
            <span>
              Rs. <span className="cross-text">66,000</span>
            </span>
            <span className={style.yellowCircleOfferTag}>
              Save <br /> 10%
            </span>
            <div className={style.orderStatus}>
              <span className="red-text">Already Sold: 6</span>
              <span className="red-text">Available: 30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDealsCard;
