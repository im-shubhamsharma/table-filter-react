import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableData from "./TableData";
import Pagination from "../Pagination/Pagination";
import "./Table.scss"

const table = () => {
  const productsData = useSelector((store) =>
    store.product.filteredProducts
      ? store.product.filteredProducts
      : store.product.products
  );

  const [posts, setPosts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    setPosts(productsData);
  }, [productsData]);

  console.log(posts);
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Paginate Method to change Page
  const paginate = (pageNumber) => {
       setCurrentPage(pageNumber);
  }

  return (
    <div className="table-sub-container">
      <table cellSpacing="0" cellPadding="20px">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Color</th>
            <th>Category</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {currentPost.map((item) => (
            <TableData key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={productsData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default table;
