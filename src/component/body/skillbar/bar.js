import React from 'react';

const Bar = ({percent}) => {
    return(
        <div className='ba br-pill b--black-40 w-100 flex mb2'>
            <div className='h1 bl bg-black-70 br-pill' style={{width:percent}}>
                
            </div>
        </div>
    )
}

export default Bar;