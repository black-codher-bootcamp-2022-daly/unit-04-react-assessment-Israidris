import React from "react";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";
import Product from "./Product";
import Nav from "./Nav";

const Basket = ({ basket, location, basketCount, basketTotal, removeFromBasket }) => {

  return (
    <>
    <Nav />
      <h2>Basket</h2>
      <BasketCount basketCount={basketCount}  />
       {basket.length === 0 
        ? (<div>Sorry, no items added...</div>)
        : (basket.map((basketItem) => (
          <div key={basketItem.trackId}>
            <Product
              location={location}
              item={basketItem}
              removeFromBasket={removeFromBasket}
              inBasket={basketItem.inBasket}
            />
            </div>
          )))}
      <h2 className="total">
        <br /> Total: £ {basketTotal === 0 ? `0.00` : <BasketTotal basketTotal={basketTotal} />}
      </h2>
    </>
  );
};

export default Basket;