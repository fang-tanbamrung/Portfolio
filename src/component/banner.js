import React from 'react';

const Banner = () => {
    return (
        <div >
            <div className='flex justify-center view'>
                <div className='animate'></div>
                <div className='animate'></div>
                <div className='animate'></div>
            </div>
            <div className='banner'>
                <div className='flex justify-center'>
                    <h1 className='tc'>
                        {'Watcharakorn Tanbamrung'}
                    </h1>
                </div>
                <div className='tc f4'>
                    {'seeks the'}
                </div>
                <div className='flex justify-center'>
                    <h1 className='tc'>
                        {'Position : Front-end Developer'}
                    </h1>
                </div>
                <div className='flex justify-center'>
                    <button className='btn'>
                        <a href='#skills' className='white no-underline'>
                            {'About Me!'}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner;