import Filter from "./components/Filters/Filter";
import Table from "./components/Table/Table";
import "./App.scss";
import AddDataForm from "./components/AddNEditData/AddDataForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import { Route, Routes } from "react-router-dom";
import EditDataForm from "./components/AddNEditData/EditDataForm";

function App() {
  const inventoryData = useSelector((store) => store.product.products);

  useEffect(() => {
    localStorage.setItem("Inventory1", JSON.stringify(inventoryData));
  }, [inventoryData]);

  // Add New Product Error Modal-------------
  const [showModal, setShowModal] = useState(false);
  const [modalErrors, setModalErrors] = useState([]);

  return (
    <div className="app">
      <div className="sidebar">
        <Filter />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route
            path="/add"
            element={
              <AddDataForm
                setShowModal={setShowModal}
                setModalErrors={setModalErrors}
              />
            }
          />
          <Route
            path="/edit"
            element={
              <EditDataForm
                setShowModal={setShowModal}
                setModalErrors={setModalErrors}
              />
            }
          />
        </Routes>

        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            modalErrors={modalErrors}
          />
        )}
      </div>
    </div>
  );
}

export default App;
