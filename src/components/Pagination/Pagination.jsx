import React from "react";
import "./Pagination.scss";

const Pagination = ({ postPerPage, totalPosts, paginate, setPostPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  function updatePostPerPage() {}

  return (
    <div className="pagination-container">
      <div className="pagination-item-count">
        <label>
           Items per page
          <select onChange={(e) => setPostPerPage(e.target.value)}>
            {/* <option style={{ display: "none" }}>Items Per Page</option> */}
            <option>5</option>
            <option selected>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </label>
      </div>
      <div className="pagination-pages">
        {pageNumbers.map((page) => (
          <button key={page} onClick={() => paginate(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
