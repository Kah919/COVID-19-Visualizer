import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';



const StateDataModal = props => {
    const [lgShow, setLgShow] = useState(true);
  
    return (
      <>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(!lgShow)}
          aria-labelledby="example-modal-sizes-title-lg"
          onClick={props.stopModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default StateDataModal;