import React from "react";

import "./Home.css";

import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="Home">
      <img
        src="https://i.imgur.com/SqUrAFJ.jpg"
        className="Home__image"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1234"
          title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
          price={41999}
          rating={5}
          image="https://i.imgur.com/DvzVgWj.jpg"
        />
        <Product
          id="12345"
          title="Think and Grow Rich Paperback"
          price={157}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Y8jwGiebL._SX328_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
          price={3499}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
        />
        <Product
          id="123478"
          title="The Rudest Book Ever - Paper Back"
          price={254}
          rating={4}
          image="https://m.media-amazon.com/images/I/51rVr4utFRL._SY346_.jpg"
        />
        <Product
          id="123498"
          title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
          price={17499}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123436"
          title="HP Omen 15-dh0136TX 2019 15.6-inch Gaming Laptop (9th Gen i7-9750H/16GB/1TB HDD + 512GB SSD/Windows 10/6GB NVIDIA GTX 1660Ti Graphics), Shadow Black"
          price={160000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/817CMIW9NsL._SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
