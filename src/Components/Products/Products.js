import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Products.scss";

export const Products = () => {
  const state = useSelector((states) => states.handleCart);
  const [data, setData] = useState([]);
  const [fiter, setFilter] = useState([]);
  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const respon = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await respon.clone().json());
        setFilter(await respon.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="wrapper-loading">
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
          <div className="col-md-3">
            <Skeleton height={350} />
          </div>
        </div>
      </>
    );
  };

  const searchOut = (result) => {
    const UpdateList = data.filter((x) => {
      return x.title.toLowerCase().includes(result);
    });
    setFilter(UpdateList);
  };

  const ListProduct = () => {
    const [search, setSearch] = useState("");
    const categories = [
      {
        id: 1,
        name: "All",
      },
      {
        id: 2,
        name: "Men's Clothing",
      },
      {
        id: 3,
        name: "Women's Clothing",
      },
      {
        id: 4,
        name: "Jewelery",
      },
      {
        id: 5,
        name: "Electronics",
      },
    ];
    const filterProduct = (input) => {
      if (input === "all") {
        setFilter(data);
      } else {
        const updateList = data.filter((x) => {
          return x.category === input;
        });
        setFilter(updateList);
      }
    };

    return (
      <>
        <section>
          <div className="gird-wrapper">
            <div className="product-button">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={
                    active === category.id ? "button-active" : "products__tag"
                  }
                  id={category.id}
                  onClick={(e) => {
                    setActive(Number(e.target.id));
                    filterProduct(category.name.toLowerCase());
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="product-input">
              <input
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="searchs"
              />
              <AiOutlineSearch
                className="product-search"
                onClick={() => searchOut(search)}
              />
            </div>
            <div className="gird-row">
              {fiter.length === 0 ? (
                <h3 className="mt-4 mg-b4">
                  {" "}
                  Sorry! We don't have the product that you were looking for ^-^
                </h3>
              ) : (
                <>
                  {fiter.map((products) => {
                    return (
                      <section>
                        <div className="gird-collum" key={products.id}>
                          <div className="wrapper-collum">
                            <div
                              className={
                                products.category ? "collum-product_new" : ""
                              }
                            ></div>
                            <div className="gird-collum-body">
                              <Link to={`/product/${products.id}`}>
                                <img
                                  className="product-img"
                                  src={products.image}
                                  alt={products.title}
                                />
                              </Link>
                            </div>
                            <div className="overlay">
                              <Link
                                className="overlay-body"
                                to={`/product/${products.id}`}
                              >
                                <IoCartSharp />
                              </Link>
                            </div>

                            <div className="gird-card">
                              <h2>{products.title}</h2>
                              <p>${products.price}</p>
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </section>
      </>
    );
  };

  const filterProduct = (cat) => {
    console.log("cat", cat);
    const updateList = data.filter((x) => x.category === cat.product);
    setFilter(updateList);
  };

  return (
    <>
      <div className="products-title">
        <h1>selling products</h1>
      </div>
      {loading ? <Loading /> : <ListProduct />}
      {state.map(filterProduct)}
    </>
  );
};
export default Products;
