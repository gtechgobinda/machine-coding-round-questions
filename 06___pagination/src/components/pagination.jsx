"use client";
import React, { useEffect, useState } from "react";
import "./pagination.css";
const Pagination = () => {
  const [products, setProducts] = useState([]);

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
          {products.map((prod) => {
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

    </>
  );
};

export default Pagination;
