import React from 'react';
import './header.css';

export const Header = () => {
    return(
        <div className='bg-color'>
            <nav className="flex justify-center bb b--white-10 text-color">
                <div className='ma3 pa1 nowrap overflow-x-auto'>
                    <a className='text-color no-underline ttu hover dim mr5' href='#skills' title='Skills'>Skills</a>                    
                    <a className='text-color no-underline ttu hover dim mr5' href='#projects' title='Project'>project</a>
                    <a className='text-color no-underline ttu hover dim mr5' href='#education' title='Education'>education</a>
                    <a className='text-color no-underline ttu hover dim mr5' href='#contact' title='Contact'>Contact</a>
                </div>
            </nav>

        </div>
    )
}