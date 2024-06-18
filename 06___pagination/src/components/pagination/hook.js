import React from "react";
import { useState } from "react";

const usePaginationHook = (initialPage = 1, initialPageSize = 10) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };
  return {
    currentPage,
    pageSize,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    setPageSize,
  };
};

export default usePaginationHook;
