import React from "react";

import "./CheckoutProduct.css";

import { useStateValue } from "../../../store/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [_, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };

  return (
    <React.Fragment>
      <div className="checkoutProduct">
        <img src={image} alt={`${title}`} className="checkoutProduct__image" />

        <div className="checkoutProduct__Info">
          <p className="checkoutProduct__title"> {title} </p>
          <p className="checkoutProduct__price">
            <small> ₹ </small>
            <strong> {price} </strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p key={Math.random()}>⭐</p>
              ))}
          </div>

          <button onClick={removeFromBasket}> Remove Item</button>
        </div>
      </div>

      <hr />
    </React.Fragment>
  );
};

export default CheckoutProduct;
