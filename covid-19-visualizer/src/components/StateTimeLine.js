import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CoronaVirusImg from '../images/coronavirus.png';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const StateTimeLine = props => {
    const Div = styled.div`
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
    `;

    const dayElement = () => {
      if(props.stateDataTimeLine.length > 0) {
        return props.stateDataTimeLine.map(data => {
          return <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date={data.date}
                  iconStyle={{ backgroundImage: `url(${CoronaVirusImg})`, boxShadow: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
              >
                <ul>
                  <li><strong> Tested: </strong> { data.tested } </li>
                  <li><strong> Positive: </strong> { data.positive } </li>
                  <li><strong> Death: </strong> { data.deaths } </li>
                </ul>
          </VerticalTimelineElement>
        })
      } else {
        return(
          <Div>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
          </Div>
        )
      }
    }



    return(
        <VerticalTimeline>
          { dayElement() }
        </VerticalTimeline>
    )
}

export default StateTimeLine;