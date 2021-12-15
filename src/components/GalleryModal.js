import React from 'react'
import Modal from './Modal'

const GalleryModal = ({isOpen, title, closeModal}) => {
  return (
    <div>
      <Modal isOpen={isOpen} title="Nueva Galeria" closeModal={closeModal}>
          <h1>Carrusel de fotos</h1>
      </Modal>
    </div>
  );
};

export default GalleryModal
