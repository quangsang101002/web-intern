import React from "react";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { delCart } from "~/redux/action";
import { useDispatch } from "react-redux";
import { BsFillCartXFill } from "react-icons/bs";
import "./Cart.scss";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  console.log();

  const dispatch = useDispatch();

  const cartItems = (cartItem) => {
    return (
      <div className="cartitem-wrapper">
        <img className="cartitem-img" src={cartItem.image} alt="img"></img>
        <h1 className="cartitem-title">{cartItem.title}</h1>
        <h2 className="cartitem-heading">${cartItem.price}</h2>

        <IoClose
          className="cartitem-icon"
          onClick={() => dispatch(delCart(cartItem))}
        />
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <>
        <div className="product_emtyCart-product">
          <h2 className="product_emtyCart">
            {" "}
            your emptyCart product <BsFillCartXFill />
          </h2>
        </div>
      </>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  );
};

export default Cart;
