import React from "react";

import "./Product.css";

import { useStateValue } from "../../store/StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [_, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, price, rating, image },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small> ₹ </small>
          <strong> {price} </strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={Math.random()}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt={`${title} image`} />
      <button onClick={addToBasket}> Add to Cart </button>
    </div>
  );
};

export default Product;
