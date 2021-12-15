import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, children, title }) => {


    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

  return (
    <div className={`modal  ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <h1>{title}</h1>
        <button onClick={closeModal}>Cerrar modal</button>
        {children}
      </div>
    </div>
  );
};

export default Modal
