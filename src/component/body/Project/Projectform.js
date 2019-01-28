import React from 'react';

import './Projectform.css';

const Projectform = ({content, gitlink, viewlink, pic, name}) => {
    return(
        <div className='ma2 flex w-50-m w-40-l'>
            <div className='black hover-bg-white-30 ba br2 bg-white-70 pa2 container'>
                <img alt={name} className='br2 image' src={pic} width='500px' height='auto'/>
                <div className='pointer ma2 tc f4'>
                {name}
                </div>
                <div className='pa2 bg-black-90 mt2 br2 overlay' >
                    
                    <div className=''>
                        
                        <div className='ma1 text' >
                            <div className='' >
                                {content}
                            </div>
                            
                            <div className='ma2 flex justify-center items-end'>
                                <a className='no-underline mr2 hover-orange bg-white hover-bg-black dark-blue ba br2 pa1' href={gitlink} 
                                target='_blank' rel='noopener noreferrer'>
                                    {'GitHub'}
                                </a>
                                <a className='no-underline hover-orange bg-white hover-bg-black dark-blue ba br2 pa1' href={viewlink} 
                                target='_blank' rel='noopener noreferrer'>
                                    {'view'}
                                </a>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Projectform;