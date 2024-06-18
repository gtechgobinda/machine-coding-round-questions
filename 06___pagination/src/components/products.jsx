"use client";
import React, { useEffect, useState } from "react";
import "./products.css";
import usePaginationHook from "./pagination/hook.js";
const Products = () => {
  const [products, setProducts] = useState([]);
  const {
    currentPage,
    pageSize,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    setPageSize,
  } = usePaginationHook(1, 10);

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
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = products.slice(startIndex, startIndex + pageSize);
  return (
    <>
      {products.length > 0 && (
        <>
          <div className="products__all">
            {paginatedProducts.map((prod) => {
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
          <div className="pagination-controls">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={goToNextPage}
              disabled={startIndex + pageSize >= products.length}
            >
              Next
            </button>
            <div>
              <label>
                Items per page:
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </label>
            </div>
            <button onClick={() => goToPage(1)}>1</button>
            <button onClick={() => goToPage(2)}>2</button>
            <button onClick={() => goToPage(3)}>3</button>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
