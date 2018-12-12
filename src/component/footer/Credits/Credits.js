import React from 'react';
import phone from '../img/phone.png';
import location from '../img/location.png';
import email from '../img/email.png';

export const Credits = () => {
    return(
            <div className='tc mb2'>
                <h3>
                    {'Icons From'}
                </h3>
                <div className='flex justify-center'>
                    <div className='flex flex-column ba br2 bg-white-70 black w-80 pa2'>
                        <div>
                        <div>
                        
                            <div>
                                {'Icon'}
                                <img src={phone} 
                                    alt='phone' 
                                    width='15px' height='auto' 
                                    className='mr2 ml2' />
                                        made by 
                                <a className = 'no-underline dark-blue hover-red' 
                                    href="https://www.flaticon.com/authors/zurb" 
                                    title="Zurb"
                                    >
                                        {' Zurb'}
                                </a>
                            </div>
                        </div>
                        <div>
                        <div>
                            {'Icon'}
                            <img src={location} 
                                alt='loaction'
                                width ='15px' height='auto' 
                                className = 'mr2 ml2' />
                                    {'made by'} 
                            <a className = 'no-underline dark-blue hover-red' 
                                href="https://www.flaticon.com/authors/srip" 
                                title="srip"
                                >
                                    {' srip'}
                            </a>
                        </div>
                        </div>
                        <div>
                        <div>{'Icon'}
                            <img src={email} 
                                alt='loaction'
                                width ='15px' height='auto' 
                                className = 'mr2 ml2' />
                                    {'made by'} 
                            <a className = 'no-underline dark-blue hover-red' 
                                href="https://www.flaticon.com/authors/yannick" 
                                title="Yannick"
                                >
                                   {' Yannick'}
                            </a> 
                        </div>
                        {'from'} 
                            <a className = 'no-underline dark-blue hover-red' 
                                href="https://www.flaticon.com/" 		    
                                title="Flaticon"
                                >   
                                   {' www.flaticon.com'}
                            </a> 
                               {' is licensed by'} 
                            <a className = 'no-underline dark-blue hover-red' 
                                href="http://creativecommons.org/licenses/by/3.0/" 		   
                                title="Creative Commons BY 3.0" 
                                target="_blank" 
                                rel='noopener noreferrer'
                                >
                                   {' CC 3.0 BY'}
                            </a>
                        </div>
                        </div>
                        <div>
                            {'and from '}
                            <a href='https://icons8.com/' 
                                className = 'no-underline dark-blue hover-red'
                                >
                                    {'icons8'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

    )

}