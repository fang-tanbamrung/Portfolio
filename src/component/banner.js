import React from 'react';
import './banner.css';


const Banner = () => {
    return (
        <div className = ''>
            <div className='banner'>
                <div className = 'toptext'>
                    <div className='tc'>
                        <h1>
                        {'Watcharakorn Tanbamrung'}
                        </h1>
                    </div>
                    
                </div>
                <div className='flex justify-center'>
                        <a href='#skills' className=' btn white no-underline'>
                            <div className = 'text'>
                                {'About Me!'}
                            </div>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;