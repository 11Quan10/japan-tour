import React from 'react';

const Day = (props) => {
    return (
        <div className='Day'>
            <h2>Day {props.day}: {props.title}</h2>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt={props.title} style={{ width: "100%", borderRadius: "8px" }} />
            </a>
            <h3>City: {props.city}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default Day;