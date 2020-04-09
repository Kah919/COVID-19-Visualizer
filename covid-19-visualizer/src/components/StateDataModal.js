import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import StateTimeLine from './StateTimeLine';



const StateDataModal = props => {
    const [lgShow, setLgShow] = useState(true);
    const [stateDataTimeLine, setStateDataTimeLine] = useState()

    useEffect(() => {
      fetch(`https://cors-anywhere.herokuapp.com/http://coronavirusapi.com/getTimeSeries/ny`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        }})
      .then(res => res.text())
      .then(data => {
        console.log('a')
          console.log(data)
          console.log(typeof data)
          for (let i = 0; i < data.length; i++) {
            if (data[i] === '\n') console.log('newline')
          }
          
          let x = data.split('\n');
          console.log(x)
          // console.log(props.stateInfo.state)
          // setStateDataTimeLine(data)
      })
      .catch(err => console.log(err))
    })
  
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
              <StateTimeLine />
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default StateDataModal;