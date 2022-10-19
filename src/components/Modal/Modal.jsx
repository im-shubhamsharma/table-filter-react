import React, { useEffect, useRef } from "react";
import "./Modal.scss";

const Modal = ({ showModal, setShowModal, modalErrors }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.classList.add("active");

    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 5000);
    }

    const modalAnimationTimeout = setTimeout(() => {
      modalRef.current.classList.remove("active");
    }, 4000);


    return () => {
        clearTimeout(modalAnimationTimeout)
    }
  });

  return (
    <div ref={modalRef} className="modal-container">
      <ul>
        {modalErrors.map((error, index) => (
          <li key={index}>
            <p>{error}</p>
          </li>
        ))}
      </ul>

      <button onClick={() => setShowModal(false)}>X</button>
    </div>
  );
};

export default Modal;
