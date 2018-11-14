import React from 'react';
import {SignIn,Register} from '../signin/signin';
import Todo from './Todo';

export const SignInRegister = () => {
    return(
        <div className='ma2 mt4 mb4'>
            <Register/>
            <SignIn/>
        </div>
    )
}

export const Body = () => {
    return(
        <div>
            <Todo/>
        </div>
    )
}
