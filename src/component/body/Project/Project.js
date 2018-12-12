import React from 'react';

import Projectform from './Projectform';
import projectconstant from './constants';

export const Projects = () => {
    const { 
            robocontent, roboname, robogit, roboview, robopic,
            facecontent, facegit, facename, faceview, facepic,
            todocontent, todogit, todoname, todopic, todoview
            } = projectconstant;

    return(
        <section className='ma2 pt5' id = 'projects'>
            <div  data-aos='zoom-in'>
                <h2 className='bb pb2 text-shadow' >{'Project'}</h2>
                    <div className='flex justify-center flex-wrap'>
                        <Projectform name={roboname} pic={robopic}
                            gitlink={robogit} viewlink={roboview} content={robocontent}
                        />
                        <Projectform name={facename} pic={facepic}
                            gitlink={facegit} viewlink={faceview} content={facecontent}
                        />
                        <Projectform name={todoname} pic={todopic}
                            gitlink={todogit} viewlink={todoview} content={todocontent}
                        />
                    </div>
            </div>
                
                
        </section>
    )
}