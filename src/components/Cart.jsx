import React from "react";
import CartItem from "./CartItem";
import { MyCartContext } from "../management/context";

const Cart = () => {
  const { cart, total } = MyCartContext();
  return (
    <div>
      {cart.length === 0 ? (
        <div className="shopping-cart">
          <div className="empty">The cart is empty.</div>
        </div>
      ) : (
        <div className="shopping-cart">
          <div className="title">Items in cart</div>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="footer">
            Total Price ${new Intl.NumberFormat().format(total)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
