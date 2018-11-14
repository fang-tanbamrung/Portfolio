import React from 'react';
import './header.css';

export const Header = () => {
    return(
        <div className='color black'>
            <nav className="flex justify-center bb b--white-10 text-color">
                <div className='ma3'>
                    <a className='text-color no-underline ttu hover dim mr5 pill' href='#' title='About'>About</a>
                    <a className='text-color no-underline ttu hover dim mr5' href='#' title='Education'>education</a>
                    <a className='text-color no-underline ttu hover dim mr5' href='#' title='Project'>project</a>
                    <a className='text-color no-underline ttu hover dim ' href='#' title='Contact'>contact</a>                    
                </div>
            </nav>

        </div>
    )
}