import React from 'react';
import Skillbar from '../skillbar/skillbar';
import cssLogo from '../img/css.png';
import htmlLogo from '../img/html.png';
import nodeLogo from '../img/node.png';
import jsLogo from '../img/javascript.png';
import mongoLogo from '../img/mongodb.png';
import postgresLogo from '../img/postgres.png';
import reactLogo from '../img/react.png';
import reduxLogo from '../img/redux.png';
import expressLogo from '../img/express.png';  

export const Skills = () => {
    return(
        <section className='ma2 pt5' id='skills'>
            <div  data-aos='zoom-in'>
                <h2 className='bb pb2 text-shadow'>{'Skills'}</h2>
                <div className='flex flex-wrap justify-center pa3 ma2'>
                    <Skillbar percent='60%' pic={cssLogo} name={'CSS'}/>
                    <Skillbar percent='70%' pic={htmlLogo} name={'html'}/>
                    <Skillbar percent='60%' pic={jsLogo} name={'JavaScript'}/>
                    <Skillbar percent='70%' pic={reactLogo} name={'React'}/>
                    <Skillbar percent='60%' pic={reduxLogo} name={'Redux'}/>
                    <Skillbar percent='50%' pic={nodeLogo} name={'Node.js'}/>
                    <Skillbar percent='50%' pic={expressLogo} name={'expressjs'}/>
                    <Skillbar percent='70%' pic={postgresLogo} name={'PostgreSQL'}/>
                    <Skillbar percent='30%' pic={mongoLogo} name={'MongoDB'}/>
                </div>
            </div>
        </section>
    )
}