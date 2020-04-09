import React from 'react';

const StateDayStats = props => {
    return(
        <VerticalTimelineElement
            className="vertical-timeline-element--work" date="2008 - 2010" iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">Date: This will be the date</h3>
                <h4 className="vertical-timeline-element-subtitle">State Name</h4>
                <ul>
                    <li> Tested: </li>
                    <li> Positive: </li>
                    <li> Deaths: </li>
                </ul>
        </VerticalTimelineElement>
    )
}

export default StateDayStats;