import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TableData from "./TableData";

const table = () => {
   
  const productsData = useSelector((store) => store.product.filteredProducts ? store.product.filteredProducts : store.product.products);


  return (
    <div>
      <table cellSpacing="20px" cellPadding="10px" border="1px">
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
          {productsData.map((item) => <TableData key={item.id} item={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default table;
