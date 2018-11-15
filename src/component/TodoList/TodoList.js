import React from 'react';
import Body,{SignInRegister} from './body/body';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import './TodoList.css'

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            status:'',//there are 3 status(Signin,register,logout)
        }
    }
    render(){
        return(
            <div className='bg-black-90 white-70'>
                <header>
                    <Header/>
                </header>
                <body>
                    <SignInRegister/>
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