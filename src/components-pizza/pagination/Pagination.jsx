import React from "react";
import ReactPaginate from "react-paginate";
import { root } from "./pagination.module.scss";

function Pagination({ pageCount, onPageChange }) {
  return (
    <div>
      <ReactPaginate
        className={root}
        breakLabel="..."
        nextLabel=" >"
        previousLabel="< "
        onPageChange={onPageChange}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
