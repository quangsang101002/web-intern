import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addCart } from "~/redux/action";
import "./product.scss";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  console.log("data", data);
  const { id } = useParams();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Add product succes", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const rep = await fetch(`https://fakestoreapi.com/products/${id}`);
      setData(await rep.json());
      setLoading(false);
      return;
    };

    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="product">
          <div className="product__preview">
            <Skeleton height={200} width={200} />
          </div>
          <div className="product__overview">
            <h3 className="product__category">
              <Skeleton count={1} width={200} />
            </h3>

            <p className="product__name">
              <Skeleton count={1} width={300} />
            </p>

            <p className="product__rating">
              <Skeleton count={1} width={100} />
            </p>
            <h2 className="product__price mg-sm">
              <Skeleton count={1} width={100} />
            </h2>

            <p className="product__desc">
              <Skeleton count={5} width={300} />
            </p>

            <div>
              <Skeleton count={1} width={80} />
            </div>
          </div>
        </div>
      </>
    );
  };

  // const addItem = (product) => {
  //   dispatch(addCart(product));
  // };
  const ListProduct = () => {
    return (
      <>
        <div className="product-wrapper">
          <div className="product-image">
            <img src={data.image} alt="title" />
          </div>
          <div className="product-body">
            <h1>{data.category}</h1>
            <h2>{data.title}</h2>
            <span>{data.rate}</span>
            <span>{data.count}</span>
            <p>{data.description}</p>

            <div className="product-btn">
              <button onClick={() => addProduct(data)}>Add cart</button>
              <Link to="/">
                <button>Go to cart</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {loading ? <Loading /> : <ListProduct />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Product;
