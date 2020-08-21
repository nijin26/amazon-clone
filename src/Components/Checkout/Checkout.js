import React from "react";

import "./Checkout.css";

import { useStateValue } from "../../store/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import SubTotal from "./Subtotal/SubTotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="left">
        <img
          src="https://i.imgur.com/oakt1ZU.jpg"
          alt="Amazon Add"
          className="checkout__ad"
        />

        {basket?.length === 0 ? (
          <div>
            {" "}
            <h2>Your Shopping Cart is Empty </h2>{" "}
            <p>
              {" "}
              You have no items in your basket. If you want to buy items "Click
              on Add To Basket" button next to a specific item.
            </p>{" "}
          </div>
        ) : (
          <div>
            {" "}
            <h2 className="checkout__title"> Your Shopping Cart </h2>{" "}
            {basket?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="right">
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
