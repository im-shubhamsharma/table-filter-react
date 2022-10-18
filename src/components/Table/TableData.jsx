import React from "react";
import star from "../../assets/star.png";


const TableData = (props) => {
  const { name, color, price, category, rating } = props.item;
  return (
    <tr>
      <td>{name}</td>
      <td> &#8377; {currencyFormat(price)}</td>
      <td>{color}</td>
      <td>{category}</td>
      <td style={{display:"flex", alignItems:"center", justifyContent:"center"}}><img src={star}/>{parseFloat(rating).toFixed(1)}</td>
    </tr>
  );
};

function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default TableData;
