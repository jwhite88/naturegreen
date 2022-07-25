import React, { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '20%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '0%',
        transform: 'translate(0%, -50%)',
    },
};

// Modal.setAppElement('#yourAppElement');

function PopupModal() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal(): void {
        setIsOpen(true);
    }

    function afterOpenModal(): void {
        // references are now sync'd and can be accessed.
       // subtitle.style.color = '#f00';
    }

    function closeModal(): void {
        setIsOpen(false);
    }
  return (
    <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              id={"modal"}
          >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <div>
                <form>
                    <input className='border-2 rounded-lg' type="text" /> <br />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
              </div>
          </Modal>
    </div>
  )
}

export default PopupModal