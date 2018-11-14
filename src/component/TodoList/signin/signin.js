import React from 'react';
import './signin.css'

export const SignIn = () => {
    return(
        <div className='flex justify-center items-center'>
            <div className='pa3 ba br3 b--white-30 bg-white-10'>
                <h2 className='tc'>Sign In</h2>
                <p>Email</p>
                <input type='email' name='email' placeholder='Enter Email' required/>
                <p>Password</p>
                <input type='password' name='password' placeholder='Enter Password'/>
                <div className='flex justify-center '>
                    <input className='pa2 ma2 mt3 w-30 ba br2 bg-dark-gray white dim tc pointer' type='submit' name='submit' value='Submit'/>
                    <input className='pa2 ma2 mt3 w-30 ba br2 bg-dark-gray white dim tc pointer' type='submit' name='Register' value='Register'/>
                </div>
            </div>
        </div>
    )
}

export const Register = () => {
    return(
        <div className='flex justify-center items-center'>
            <div className='pa3 ba br3 b--white-30 bg-white-10'>
                <h2 className='tc'>Register</h2>
                <p>Firstname</p>
                <input type='text' name='fname' placeholder='Enter Firstname'/>
                <p>Lastname</p>
                <input type='text' name='lname' placeholder='Enter Lastname'/>
                <p>Email*</p>
                <input type='email' name='email' placeholder='Enter Email' required/>
                <p>Password*</p>
                <input type='password' name='password' placeholder='Enter Password'/>
                <p>Password Again*</p>
                <input type='password' name='passwordr' placeholder='Enter Password Again'/>
                {/* if(password != passwordr){
                    alert('password is not same')
                    } */}
                <div className='flex justify-center '>
                    <input className='pa2 ma2 mt3 w-30 ba br2 bg-dark-gray white dim tc pointer' type='submit' name='submit' value='Submit'/>
                </div>

            </div>
        </div>
    )
}