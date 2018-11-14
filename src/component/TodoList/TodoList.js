import React from 'react';
import {SignInRegister,Body} from './body/body';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import './TodoList.css'

class TodoList extends React.Component{
    render(){
        return(
            <div className='bg-black-90 white-70'>
                <header>
                    <Header/>
                </header>
                <body>
                    <Body/>
                </body>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }
}

export default TodoList;