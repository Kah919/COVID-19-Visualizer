import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import StateTimeLine from './StateTimeLine';
import CountUp from 'react-countup';



const StateDataModal = ( {stateInfo: { state, positive, hospitalized, recovered, death, lastUpdateEt }, stopModal }) => {
    const [ lgShow, setLgShow ] = useState(true);
    const [ shouldFetch, setShouldFetch ] = useState(true);
    const [ stateDataTimeLine, setStateDataTimeLine ] = useState([])

    const normalizeData = data => {
      let day = data.split('\n');
      day.shift()
      const dailyDataArr = []
      for(let i = 0; i < day.length; i++) {
        const dailyData = {}
        const data = day[i].split(",")
        dailyData.date = new Date(data[0] * 1000).toString()
        dailyData.tested = parseInt(data[1] || 0)
        dailyData.positive = parseInt(data[2] || 0)
        dailyData.deaths = parseInt(data[3] || 0)
        dailyDataArr.push(dailyData)
      }
      return dailyDataArr
    }

    useEffect(() => {
      fetch(`https://cors-anywhere.herokuapp.com/http://coronavirusapi.com/getTimeSeries/${state}`, {
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
          onClick={stopModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            { state }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <thead>
                <td colspan="2"> Cases </td>
                <td colspan="2"> Hospitalized </td>
                <td colspan="2"> Recovered </td>
                <td colspan="2"> Death </td>
                <td colspan="2"> Last Updated </td>
              </thead>
              <tr>
                <td colspan="2">
                  <CountUp start={ 0 } end={ positive } duration={ 2.5 } separator="," />
                </td>
                <td colspan="2">
                  <CountUp start={ 0 } end={ hospitalized } duration={ 2.5 } separator="," />
                </td>
                <td colspan="2">
                  <CountUp start={ 0 } end={ recovered } duration={ 2.5 } separator="," />
                </td>
                <td colspan="2">
                  <CountUp start={ 0 } end={ death } duration={ 2.5 } separator="," />
                </td>
                <td colspan="2">{lastUpdateEt}</td>
              </tr>
            </table>
            
              <StateTimeLine stateDataTimeLine={ stateDataTimeLine }/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default StateDataModal;