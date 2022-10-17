import React from "react";

const TableData = (props) => {
  const { name, color, price, category, rating } = props.item;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{color}</td>
      <td>{category}</td>
      <td>{parseFloat(rating).toFixed(1)}</td>
    </tr>
  );
};

export default TableData;
