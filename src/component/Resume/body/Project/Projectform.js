import React from 'react';

import './Projectform.css';

const Projectform = ({content, gitlink, viewlink, pic, name}) => {
    return(
        <div className='ma2 flex '>
            <div className='dropdown black hover-bg-white-30 ba br2 bg-white-70 pa2'>
                <div className='pointer'>
                {name}
                </div>
                <div className='pa2 bg-white-70 mt2 br2 absolute dropdown-content' style={{minWidth:'500px'}}>
                    
                    <div className='flex flex-column'>
                        
                        <div className='ma'>
                            <div>
                                {content}
                            </div>
                            
                            <div className='ma2'>
                                <a className='no-underline mr2 hover-orange dark-blue ba br2 pa1' href={gitlink} 
                                target='_blank' rel='noopener noreferrer'>
                                    {'GitHub'}
                                </a>
                                <a className='no-underline hover-orange dark-blue ba br2 pa1' href={viewlink} 
                                target='_blank' rel='noopener noreferrer'>
                                    {'view'}
                                </a>
                            </div>
                        </div>
                        <img alt={name} className='br2' src={pic} width='500px' height='auto'/>
                        
                    
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Projectform;