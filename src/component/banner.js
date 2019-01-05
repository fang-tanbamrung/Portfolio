import React from 'react';
import './banner.css';


const Banner = () => {
    return (
        <div className = ''>
            <div className='banner'>
                <div className = 'position'>
                    <div className='tc f4'>
                        {'seeks the'}
                    </div>
                    <div className='tc'>
                        <h1 className=''>
                            {'Position : React Front-end Developer'}
                        </h1>
                        <div></div>
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