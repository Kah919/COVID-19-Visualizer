import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const StateTimeLine = props => {
    const dayElement = () => {
      if(props.stateDataTimeLine.length > 0) {
        return props.stateDataTimeLine.map(data => {
          return <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date={data.date}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">tested: { data.tested }</h3>
                <h4 className="vertical-timeline-element-subtitle">positive: { data.positive }</h4>
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