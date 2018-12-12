import React from 'react';
import Bar from './bar';

const Skillbar = ({percent,pic,name}) => {
    return(
        <div className='ba br2 b--black-50 pa3 ma2 grow bg-white-70 black'>
            <div>
                <img src={pic} alt={name} width='200' height='auto' />
            </div>
            <div className='tc'>
                {name}
            </div>
            <div>
                <Bar percent={percent}/>
            </div>
        </div>
    )
}

export default Skillbar;
