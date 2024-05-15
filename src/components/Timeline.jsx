import React, { Component } from 'react';
import './Timeline.css'

var timelineData = [
    {
        text: 'Software Research Assistant',
        place: 'PhotoMedicine Labs',
        date: 'January 2024 - April 2024',
        category: {
            tag: 'co-op',
            color: '#004643'
        },
        description: 'Developed a website to displays a library of high-resolution histology images using Javascript, ReactJS, Microsoft Azure Blob Storage and Azure Cosmos DB',
        link: {
            url: '',
            text: ''
        }
    },    
    {
        text: 'Unity Game Developer',
        place: 'Watolink Neurotech Design Team',
        date: 'January 2024 - PRESENT',
        category: {
            tag: 'design team',
            color: '#004643'
        },
        description: 'Coding a video game played with keyboard input and blinks detected with the Neurosity Crown. Recognized as a 2024 IEEE GameSIG Showcase Top Ten Finalist',
        link: {
            url: 'https://youtu.be/eM4WI_Grpx0',
            // text: 'View pitch video'
        }
    },
    {
        text: 'Research Engineer',
        place: 'Symphonic Labs',
        date: 'September 2023 - December 2023',
        category: {
            tag: 'design team',
            color: '#004643'
        },
        description: 'Aided in design of research study to collect data from human participants to enhance a wearable prosthetic that translates facial muscle movements to text',
        link: {
            url: '',
            text: ''
        }
    },
    {
        text: 'Keenan Research Summer Student',
        place: 'Interventional Psychiatry Program',
        date: 'June 2023 - August 2023',
        category: {
            tag: 'CO-OP',
            color: '#004643'
        },
        description: 'Interacted professionally and performed quality assurance during data acquisition of physiological signals (RSP, ECG, PPG, EDA) for 95+ human participants',
        link: {
            url: '',
            text: ''
        }
    },
    {
        text: 'Design Manager',
        place: 'Green String Network through Develop For Good',
        date: 'May 2023 - August 2023',
        category: {
            tag: 'VOLUNTEER',
            color: '#004643'
        },
        description: 'Led a team of 8 to design an app to deliver holistic mental care through East Africa. Communicated with clients and PM to shape specifications, deadlines and 6+ major functions',
        link: {
            url: '',
            // text: 'Read more'
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
            <p style={{color: '#004643', width: '800px'}}><b>{data.text}</b> 
              <br />
              <small style={{color: '#004643'}}><b>{data.place}</b></small>
              <br />
              <small style={{color: '#004643'}}>{data.description}</small>
            </p>
            {data.link.text && data.link && (
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
            <h2>Experiences</h2>
            <p style={{textAlign: 'center'}}>PRESENT</p>
            <TimelinePart />;
          </section>
        )
    }
}