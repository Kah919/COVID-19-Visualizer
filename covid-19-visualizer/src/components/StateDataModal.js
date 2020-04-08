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
            { props.stateInfo.state }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <li><strong>Cases:</strong> {props.stateInfo.positive}</li>
              <li><strong>Hospitalized:</strong> {props.stateInfo.hospitalized}</li>
              <li><strong>Recovered:</strong> {props.stateInfo.recovered}</li>
              <li><strong>Death:</strong> {props.stateInfo.death}</li>
              <li><em>Last Updated: {props.stateInfo.lastUpdateEt}</em></li>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default StateDataModal;