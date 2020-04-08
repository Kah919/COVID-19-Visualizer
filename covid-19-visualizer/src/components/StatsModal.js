import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';



const StatsModal = props => {
    const [lgShow, setLgShow] = useState(false);
  
    return (
      <>
        <Button variant="contained" color="primary" onClick={() => setLgShow(true)}>Large modal</Button>
        
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Hello World
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default StatsModal;