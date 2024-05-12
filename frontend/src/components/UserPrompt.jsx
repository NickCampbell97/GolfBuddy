
import React from 'react';
import { Typography } from '@mui/material';
import '../styles/UserPromptStyle.css';

export default function UserPrompt() {

    var text = `
    Ready to plan your next golf trip? Select the date and golf course you'd like to play
    from our list of over 15,000 courses in the US. Click SEARCH to load historic weather, 
    flight, and hotel info to help make your decision. Happy golfing, weekend warriors!
    `;

    return (
        <div className='prompt-container' style={{ display: 'inline-block', alignContent: 'center' }}>
            <Typography variant='s1' style={{ lineHeight: '24px' }}>
                {text}
            </Typography>
        </div>
    );

};