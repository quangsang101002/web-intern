import React from "react";
import { img } from "../img/img";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <div className="navbar-app">
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            <Link to="/">
              <img src={img.imglogo} alt="logo4menshop" />
            </Link>
          </div>
          <div className="navbar-list">
            <ul className="navbar-list_body">
              <Link to="/">
                <li className="navbar-list_newproduct">new products</li>
              </Link>

              <li className="navbar-list_mensshirt">
                Men's Clothing
                <ul className="navbar-list_mensshirt-children">
                  <li>Backpack</li>
                  <li>Men T-shirt</li>
                  <li>Mens Cotton Jacket</li>
                  <li>Mens Casual Slim Fit</li>
                </ul>
              </li>
              <li className="navbar-list_malepants">
                Women's Clothing
                <ul className="navbar-list_malepants-children">
                  <li>ski jacket</li>
                  <li>moto leather jacket </li>
                  <li>climbing windbreaker</li>
                  <li>MBJ Women's Solid Short Sleeve Boat Neck V</li>
                  <li>Opna Women's Short Sleeve Moisture</li>
                  <li>T-shirt</li>
                </ul>
              </li>
              <li className="navbar-list_accessory">
                JeweleryE
                <ul className="navbar-list_accessory-children">
                  <li>Bracelet</li>
                  <li>ring</li>
                  <li>Diamond ring</li>
                  <li>gold plated ring</li>
                </ul>
              </li>
              <li className=" navbar-list_footwear">
                lectronics
                <ul className="navbar-list_footwear-children">
                  <li>Hard Drive</li>
                  <li>television</li>
                </ul>
              </li>
              <li className="navbar-list-promotion">Promo</li>
            </ul>
          </div>
          <div className="navbar-icon">
            <div className="navbar-cart">
              {" "}
              <Link to="/cart">
                <div className="cart-lenght">
                  <BsFillCartFill />({state.length})
                </div>
              </Link>
            </div>
            <div className="navbar-search">
              {" "}
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
