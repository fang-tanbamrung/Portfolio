import React from 'react';
import {Header} from './header/header';
import { About, Education, Project} from './body/body';
import {Footer} from './footer/footer';

class Resume extends React.Component {
    render(){
        return(
            <div className='bg-silver'>
                <header>
                    <Header/>
                </header>
                <body className=''>
                    <About/>
                    <Education/>
                    <Project/>
                </body>
                <footer className=''>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default Resume;