"use client";
import React, { useEffect, useState } from "react";
import "./pagination.css";
const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  console.log("hello", products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div className="products__all">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <>
                <div className="products__single" key={prod.id}>
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="products__img"
                  />
                  <span className="products__title">{prod.title}</span>
                  <br />
                </div>
              </>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span>PREVIOUS</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <>
                <span key={i}>{i + 1}</span>
              </>
            );
          })}
          {/* <span>1</span> */}
          <span>NEXT</span>
        </div>
      )}
    </>
  );
};

export default Pagination;
