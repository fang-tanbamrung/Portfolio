import React from 'react';
import { Header } from './component/Resume/header/header';
import { Contact } from './component/Resume/body/Contact/Contact';
import { Education } from './component/Resume/body/Education/Education';
import { Projects } from './component/Resume/body/Project/Project';
import { Skills } from './component/Resume/body/Skills/skills';
import { Footer } from './component/Resume/footer/footer';
import './Resume.css';

class Resume extends React.Component {
    render(){
        return(
            <div className='ml3 fw6 white'>
                <header>
                    <Header/>
                </header>
                <div>
                    <Skills/>
                    <Projects />
                    <Education/>
                    <Contact />
                </div>
                <footer className=''>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default Resume;