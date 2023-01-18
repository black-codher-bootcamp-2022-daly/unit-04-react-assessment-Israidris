import React from "react";
import Product from "./Product";

const ProductList = ({ items, ...props }) => {
  return (
    <>
      {items.length === 0
        ? <div className="empty">No items found...</div>
        : items.map((item) => (
          <div className="product" key={item.trackId ? item.trackId : item.artistId}>
            <Product
              key={item.trackId ? item.trackId : item.artistId}
              item={item}
              addToBasket={props.addToBasket}
              removeFromBasket={props.removeFromBasket}
            />
            </div>
          ))}
    </>
  );
};

export default ProductList;