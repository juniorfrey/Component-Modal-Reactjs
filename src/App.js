
import React from 'react';
import Modal from './components/Modal';
import GalleryModal from "./components/GalleryModal";

import useModal from "./Hooks/useModal";

function App() {

  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  const [isOpenGalleryModal, openGalleryModal, closeGalleryModal] = useModal();
  

  return (
    <div>
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <button onClick={openGalleryModal}>Gallery Modal</button>

      <Modal
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title="Login"
      >
        <form>
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
        </form>
      </Modal>

      <Modal isOpen={isOpenChatModal} closeModal={closeChatModal} title="Chat">
        <p>
          Hola !! <b> - Luis </b>
        </p>
        <p>
          Hola !! <b> - Maria </b>
        </p>
      </Modal>

      <GalleryModal
        isOpen={isOpenGalleryModal}
        closeModal={closeGalleryModal}
      />
    </div>
  );
}

export default App;
