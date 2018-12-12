import React from 'react';
import email from '../img/email.png';
import location from '../img/location.png';

export const Contact = () => {
    return(
        <section className='ma2 pt5' id='contact'>
            <div data-aos='zoom-in'>
                <h2 className='bb pb2 text-shadow'>{'Contact'}</h2>
                <div className='flex justify-center'>
                    <div className='tc ba br2 pa2 bg-white-70 black'>
                        <div>
                            <img src={location} alt='loaction'width ='15px' height='auto' className = 'mr2 ml2' />
                                {'108 Moo 6 Prangmoo Meaung Phatthalung 93000'}
                        </div>
                        <div>
                            <a className='black' href='mailto:tanbamrung.w@gmail.com'>
                            <img src={email} alt='loaction'width ='15px' height='auto' className = 'mr2 ml2' />
                                    {'tanbamrung.w@gmail.com '}
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}