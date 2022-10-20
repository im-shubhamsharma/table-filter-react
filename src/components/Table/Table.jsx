import React, { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableData from "./TableData";
import SearchBar from "./SearchBar";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import "./Table.scss";

const table = () => {
  const productsData = useSelector((store) =>
    store.product.filteredProducts
      ? store.product.filteredProducts
      : store.product.products
  );

  const data = useSelector((store) => store.product.products);

  // pagination code starts----------------------------->
  const [posts, setPosts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    setPosts(productsData);
  }, [productsData, postPerPage]);

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Paginate Method to change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // pagination code end---------------------------------->

  // update search results starts---------------------------->
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  // update search results end---------------------------->
  const [tableData, setTableData] = useState(currentPost);

  // setTableData(
  //   searchInput ? (searchData.length > 0 ? searchData : "") : currentPost
  // );

  useEffect(() => {
    if (searchInput) {
      if (searchData.length > 0) {
        setTableData(searchData);
      }
    } else {
      setTableData(currentPost);
    }
  }, [currentPage, searchInput, posts, postPerPage]);

  // function to sort tableData starts---------------------->

  const [sort, setSort] = useState(true); // true for ascending and false for descending

  const sortByPrice = () => {
    let sortedArr = tableData;
    if (sort) {
      sortedArr = tableData.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else {
      sortedArr = tableData.sort((a, b) => (a.price < b.price ? 1 : -1));
    }

    const newTableData = sortedArr.map((item, index) => ({
      ...item,
      id: index,
    }));
    setTableData(newTableData);
  };

  const sortDataAsc = () => {
    const sortedArr = tableData.sort((a, b) => a.name.localeCompare(b.name));

    const newTableData = sortedArr.map((item, index) => ({
      ...item,
      id: index,
    }));

    setTableData(newTableData);
  };

  const sortDataDesc = () => {
    const sortedArr = tableData.sort((a, b) => b.name.localeCompare(a.name));

    const newTableData = sortedArr.map((item, index) => ({
      ...item,
      id: index,
    }));

    setTableData(newTableData);
  };

  return (
    <div className="table-container">
      <div>
        {/* Table Header - Search and Add New Button */}
        <div className="table-header">
          <Link to="/add" className="add-new-btn">
            <button className="add-new">Add New Product</button>
          </Link>
          <SearchBar
            data={data}
            setSearchData={setSearchData}
            setSearchInput={setSearchInput}
          />
        </div>

        {/* Table Data */}
        {tableData && (
          <table cellSpacing="0" cellPadding="20px">
            <thead>
              <tr>
                <th>
                  Product Name
                  <span>
                    <button onClick={sortDataDesc}> &uArr;</button>
                    Sort
                    <button onClick={sortDataAsc}> &dArr;</button>
                  </span>
                </th>
                <th>
                  Price
                  <button
                    onClick={() => {
                      sortByPrice();
                      setSort((prev) => !prev);
                    }}
                  >
                    {sort ? <span>&dArr;</span> : <span>&uArr;</span>}
                  </button>
                </th>
                <th>Color</th>
                <th>Category</th>
                <th>Ratings</th>
                <th>Stock</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <TableData key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <Pagination
          postPerPage={postPerPage}
          totalPosts={productsData.length}
          paginate={paginate}
          setPostPerPage={setPostPerPage}
        />
      </div>
    </div>
  );
};

export default table;
