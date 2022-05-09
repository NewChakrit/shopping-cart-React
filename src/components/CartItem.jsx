import React from "react";
import Minus from "../image/minus.svg";
import Plus from "../image/plus.svg";
import Delete from "../image/delete-icn.svg";
import { MyCartContext } from "../management/context";

const CartItem = ({ id, name, image_url, price, quantity }) => {
  const { removeItem, toggleQuantity } = MyCartContext();
  return (
    <div className="item">
      <div className="product_img">
        <img src={image_url} alt={name} />
      </div>
      <div className="desc">
        <span>{name}</span>
        <span>${new Intl.NumberFormat().format(price)}</span>
      </div>
      <div className="quantity">
        <button className="minus" onClick={() => toggleQuantity(id, "dec")}>
          <img src={Minus} alt="" />
        </button>
        <input type="number" value={quantity} disabled />
        <button className="plus" onClick={() => toggleQuantity(id, "inc")}>
          <img src={Plus} alt="" />
        </button>
      </div>
      <div className="total-price">
        {new Intl.NumberFormat().format(quantity * price)}
      </div>
      <div className="remove" onClick={() => removeItem(id)}>
        <img src={Delete} alt="" />
      </div>
    </div>
  );
};

export default CartItem;
