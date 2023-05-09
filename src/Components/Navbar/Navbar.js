import React, { useState } from "react";
import { img } from "../img/img";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import { navMenu } from "~/redux/action";
import { useDispatch } from "react-redux";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const state = useSelector((state) => state.handleCart);

  console.log(">>>>>>>>>>>> length", state);
  const handleClick = () => setClick(!click);
  const closeMenuMobile = () => setClick(!click);

  // const dispatch = useDispatch();
  // const filterProduct = (input) => {
  //   dispatch(navMenu(input));
  // };
  return (
    <>
      <div className="navbar-app">
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            {}
            <Link to="/">
              <img src={img.imglogo} alt="logo4menshop" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <div className={click ? "nav-menu active" : "nav-menu "}>
            <ul className="list-product">
              <li
                className="list-product_active"
                onClick={() => {
                  closeMenuMobile();
                  // filterProduct("men's clothing");
                }}
              >
                Men's Clothing
              </li>
              <li
                className="list-product_active"
                onClick={() => {
                  closeMenuMobile();
                  // filterProduct("women's clothing");
                }}
              >
                Women's Clothing
              </li>
              <li
                className="list-product_active"
                onClick={() => {
                  closeMenuMobile();

                  // filterProduct("jewelery");
                }}
              >
                Jewelery
              </li>
              <li
                className="list-product_active"
                onClick={() => {
                  closeMenuMobile();

                  // filterProduct("electronics");
                }}
              >
                Electronics
              </li>
            </ul>
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
            <Link to="/product">
              <div className="navbar-search">
                {" "}
                <AiOutlineSearch />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
