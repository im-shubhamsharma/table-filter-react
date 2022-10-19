import React, { useEffect, useRef } from "react";
import "./Modal.scss";

const Modal = ({ showModal, setShowModal, modalErrors }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      modalRef.current.classList.add("active");
    }, 100);

    const timeout2 = setTimeout(() => {
      setShowModal(false);
    }, 7000);

    const modalAnimationTimeout = setTimeout(() => {
      modalRef.current.classList.remove("active");
    }, 6000);

    return () => {
      clearTimeout(modalAnimationTimeout);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
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
