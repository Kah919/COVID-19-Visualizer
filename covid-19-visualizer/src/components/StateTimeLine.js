import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const StateTimeLine = props => {
    return(
        <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2008 - 2010"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                  <p>
                    User Experience, Visual Design
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2006 - 2008"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>
                    User Experience, Visual Design
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
    )
}

export default StateTimeLine;