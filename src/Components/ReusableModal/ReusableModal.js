// ReusableModal.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './ReusableModal.css'

const ReusableModal = ({ buttonText, content: ContentComponent }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button className="me-2 mb-2" onClick={handleShow} variant="dark">
        {buttonText}
      </Button>
      <Modal show={show} onHide={handleClose} fullscreen={true} dialogClassName="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ContentComponent && <ContentComponent onClose={handleClose} />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReusableModal;