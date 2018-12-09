import React from 'react';
import { Credits } from './Credits/Credits';
import { Socials } from './Socials/Socials';

export const Footer = () => {
    return(
        <div className='bt pt3 b--green'>
            <Socials/>
            <Credits/>
        </div>
    )
}