import React from 'react';
import { Header } from './header/header';
import { Contact } from './body/Contact/Contact';
import { Education } from './body/Education/Education';
import { Projects } from './body/Project/Project';
import { Skills } from './body/Skills/skills';
import { Footer } from './footer/footer';
import Banner from './banner';
import './Portfolio.css';

class Resume extends React.Component {
    render(){
        return(
            <div className='white'>
                <header>
                    <Header/>
                </header>
                <Banner/>
                <div className='ml3'>
                    <Skills className='head'/>
                    <Projects className='head'/>
                    <Education className='head'/>
                    <Contact className='head'/>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default Resume;