import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../redux/features/products/productSlice";
import { validataData } from "../../utils/Validate";
import { useNavigate } from "react-router-dom";
import "./AddDataForm.scss";

const AddDataForm = ({ setModalErrors, setShowModal }) => {
  //React Router
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    color: "",
    category: "",
    rating: "",
    stock: "",
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
    const validateResult = validataData(formData);
    if (validateResult.result) {
      dispatch(addNewProduct(formData));
      navigate("/");
    } else {
      setModalErrors(validateResult.error);
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }
  };

  // Redux Operation
  const dispatch = useDispatch();

  return (
    <div className="add-data-form-container">
      <h1>Add New Product</h1>
      <form className="add-data-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="Product Color"
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
          placeholder="Product Rating"
        />

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Enter Total Stock"
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddDataForm;
