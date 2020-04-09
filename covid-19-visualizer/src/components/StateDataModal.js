import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import StateTimeLine from './StateTimeLine';



const StateDataModal = props => {
    const [lgShow, setLgShow] = useState(true);
    const [ shouldFetch, setShouldFetch ] = useState(true);
    const [stateDataTimeLine, setStateDataTimeLine] = useState([])

    const normalizeData = data => {
      let day = data.split('\n');
      day.shift()
      const dailyDataArr = []
      for(let i = 0; i < day.length; i++) {
        const dailyData = {}
        const data = day[i].split(",")
        dailyData.date = new Date(data[0] * 1000).toString()
        dailyData.tested = parseInt(data[1])
        dailyData.positive = parseInt(data[2])
        dailyData.deaths = parseInt(data[3] || 0)
        dailyDataArr.push(dailyData)
      }
      return dailyDataArr
    }

    useEffect(() => {
      fetch(`https://cors-anywhere.herokuapp.com/http://coronavirusapi.com/getTimeSeries/${props.stateInfo.state}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        }})
      .then(res => res.text())
      .then(data => {
          const normalized = normalizeData(data)
          setStateDataTimeLine(normalized)
          setShouldFetch(false)
      })
      .catch(err => console.log(err))
    }, shouldFetch)
  
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
              <StateTimeLine stateDataTimeLine={ stateDataTimeLine }/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default StateDataModal;