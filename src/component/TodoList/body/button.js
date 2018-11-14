import React from 'react';
import back from './back.png';
import next from './next.png';

export const BackButton = () => {
    return(
        <div className = ''>
            <img src={back} alt = 'back'/>
        </div>
    )
}

export const NextButton = () => {
    return(
        <div className = ''>
            <img src = {next} alt = 'next'/>
        </div>
    )
}