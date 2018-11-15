import React from 'react';
import {SignIn,Register} from '../signin/signin';
import {Todo} from './Todo';
import {Do} from './Do';
import {Done} from './Done';


export const SignInRegister = () => {
    return(
        <div className='ma2 mt4 mb4'>
            <Register/>
            <SignIn/>
        </div>
    )
}

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items : [],
            text :''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({text: e.target.value})
        // console.log('event',e.target.value);
    }

    handleSubmit(e){
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            status:'TODO',
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
    render(){
        // console.log('state',this.state)
        return(
            <div className = ''>
                <div className = 'tc mt3'>
                    <h3>What you want to do?</h3>
                    <form onSubmit = {this.handleSubmit}>
                        <input onChange = {this.handleChange} 
                        value = {this.state.text} className = 'ba br2'/>
                        <button className = 'ml2 ba br2'> Add </button>
                    </form>
                </div>
                <div className = 'flex'>
                    <Todo state = {this.state}/>
                    <Do state = {this.state} /> 
                    <Done state = {this.state} />
                </div>
            </div>
        )

    }
}

export default Body;
