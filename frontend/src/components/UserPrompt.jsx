
import React from 'react';
import { Typography } from '@mui/material';
import '../styles/style.css';

export default function UserPrompt() {

    var text = `
    Select the date and golf course you'd like to play from our list of 
    over 15,000 courses in the US to load historic weather, flight, and 
    hotel info to plan out your next golf trip. Happy golfing, weekend warriors!
    `;

    return (
        <div className='prompt-container' style={{ display: 'inline-block', alignContent: 'center' }}>
            <Typography variant='s1' style={{ lineHeight: '24px' }}>
                {text}
            </Typography>
        </div>
    );

};