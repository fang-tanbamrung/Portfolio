import React from 'react';

export const Education = () => {
    return(
        <section className='ma2 pt5' id = 'education'>
            <div data-aos='zoom-in'>
                <h2 className='bb pb2 text-shadow'>{'Education'}</h2>
                <div className='pl0 list ml3 flex flex-column items-start'>
                    <div>
                        <div className='ba br2 pa2 ma2 bg-white-70 black flex flex-column'>
                            <div className='flex justify-start'>
                                <div className='ba br-pill pa2 tc white b--white-70 bg-black-80' style={{width:'150px'}} >
                                    {'2014 - 2018'}
                                </div>
                            </div>
                            <div className='ma2 ml2'>
                                <div className='f4'>
                                    {'Silpakorn University'}
                                </div>
                                <div className='ml3 ma1'>
                                    {'Bachelor of Engineering and Industrial Technology'}<br/>
                                    {'Electrical and Computer System'}<br/>
                                    {'GPA : 3.25 (Second Class Honors)'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='ba br2 pa2 ma2 bg-white-70 black flex flex-column'>
                            <div className='flex justify-start'>
                                <div className='ba br-pill pa2 tc white b--white-70 bg-black-80' style={{width:'150px'}}>
                                    {'2018'}
                                </div>
                            </div>
                            <div className='ma2 ml2'>
                                <div className='f4'>
                                    {'Udemy Course'}
                                </div>
                                <div className='ml3 ma1'>
                                    {'The Complete Web Developer in 2018:Zero to mastery'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}