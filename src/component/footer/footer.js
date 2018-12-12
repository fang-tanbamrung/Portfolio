import React from 'react';
import { Credits } from './Credits/Credits';
import { Resource } from './Resource/Resource';
import up from './img/up.png';

export const Footer = () => {
    return(
        <div className='bt pt3 b--green bw4'>
            <div data-aos='zoom-in' >
                <Resource/>
                <div className='flex justify-center ma2'>
                    <a href='#top' >
                        <button className='pointer ba br2 bg-green pa1'>
                            <img className='up' alt='up to top' src={up}/>
                        </button>
                    </a>
                </div>
                <Credits/>
            </div>
        </div>
    )
}