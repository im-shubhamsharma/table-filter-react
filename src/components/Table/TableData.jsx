import React from "react";
import star from "../../assets/star.png";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/features/products/productSlice";

const TableData = (props) => {
  
  const dispatch = useDispatch();

  const { id, name, color, price, category, rating, stock } = props.item;
  return (
    <tr>
      <td>{name}</td>
      <td> &#8377; {currencyFormat(price)}</td>
      <td>{color ? color : "-"}</td>
      <td>{category}</td>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {rating ? (
          <>
            <img width="20px" src={star} /> {parseFloat(rating).toFixed(1)}
          </>
        ) : (
          "-"
        )}
      </td>
      <td>{stock}</td>
      <td>
        <Link to="/edit" state={props.item}>
          <img width="20px" src={editIcon} />
        </Link>
        <img
          width="20px"
          style={{ marginLeft: "15px", cursor: "pointer" }}
          src={deleteIcon}
          onClick={() => dispatch(deleteProduct(id))}
        />
      </td>
    </tr>
  );
};

function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default TableData;
