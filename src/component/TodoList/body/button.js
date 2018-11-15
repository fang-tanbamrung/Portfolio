import React from 'react';
import back from './back.png';
import next from './next.png';
import cancel from './cancel.png';

export const BackButton = () => {
    return(
        <div className = 'pointer ba br3 pa2 b--white-50 bg-light-blue dim'>
            <img className = 'flex self-center' src={back} alt = 'back' style = {{width:15,height:15}}/>
        </div>
    )
}

export const NextButton = () => {
    return(
        <div className = 'pointer br3 pa2 b--white-50 ba ml2 bg-light-blue dim'>
            <img src = {next} alt = 'next' style = {{width:15,height:15}}/>
        </div>
    )
}

export const CancelButton = () => {
    return(
        <div className = 'pointer br3 pa2 b--white-50 ba ml2 bg-red dim'>
            <img src={cancel} alt = 'cancel' style = {{width:15,height:15}}/>
        </div>
    )
}