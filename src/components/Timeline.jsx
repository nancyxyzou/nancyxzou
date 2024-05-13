import React, { Component } from 'react';
import './Timeline.css'

var timelineData = [
    {
        text: 'Keenan Research Summer Student',
        place: 'Interventional Psychiatry Program',
        date: 'May 2023 - August 2023',
        category: {
            tag: 'CO-OP',
            color: '#018f69'
        },
        link: {
            url:
                '',
            text: 'Read more'
        }
    },
    {
      text: 'Research Engineer',
      place: 'Symphonic Labs',
      date: 'September 2023 - December 2023',
      category: {
          tag: 'design team',
          color: '#018f69'
      },
      link: {
          url:
              '',
          text: 'Read more'
      }
    }
];

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p style={{color: '#004643'}}>{data.text} 
              <br />
              <small style={{color: '#004643'}}>{data.place}</small>
            </p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-link" 
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const TimelinePart = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default class Timeline extends Component {
    render() {
        return (
          <section id='timeline'>
            <h5>What have I been up to?</h5>  
            <h2>Timeline</h2>
            <TimelinePart />;
          </section>
        )
    }
}
