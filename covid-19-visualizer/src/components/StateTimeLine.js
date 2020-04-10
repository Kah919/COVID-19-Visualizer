import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CoronaVirusImg from '../images/coronavirus.png'

const StateTimeLine = props => {
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
      }
    }



    return(
        <VerticalTimeline>
          { dayElement() }
        </VerticalTimeline>
    )
}

export default StateTimeLine;