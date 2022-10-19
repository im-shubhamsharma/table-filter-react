import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editProduct } from "../../redux/features/products/productSlice";
import { validataEditData } from "../../utils/Validate";
import "./AddDataForm.scss";

const EditDataForm = ({ setModalErrors, setShowModal }) => {
  //React Router
  const navigate = useNavigate();
  const location = useLocation();

  const { id, name, price, color, category, rating, stock } = location.state;

  const [formData, setFormData] = useState({
    id,
    name,
    price,
    color,
    category,
    rating,
    stock,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validataEditData(formData);
    if (validateResult.result) {
      dispatch(editProduct({ formData, id }));
      navigate("/");
    } else {
      setModalErrors(validateResult.error);
      setTimeout(() => {
        setShowModal(true);
      }, 200);
    }
  };

  // Redux Operation
  const dispatch = useDispatch();

  return (
    <div className="add-data-form-container">
      <h1>Update Product Data</h1>
      <form className="add-data-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Product Name"
        />
        <input
          type="number"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter Product Price"
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="Enter Product Color"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option style={{ display: "none" }}>Choose Category</option>
          <option>Electronics</option>
          <option>Shoes</option>
          <option>Clothing</option>
          <option>Groceries</option>
          <option>Travel</option>
          <option>Accesories</option>
        </select>

        <input
          type="number"
          name="rating"
          step="0.01"
          min="0"
          max="5.0"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Enter Product Rating"
        />

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Enter Total Stock"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditDataForm;
