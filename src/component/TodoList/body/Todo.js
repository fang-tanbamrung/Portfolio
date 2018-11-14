import React from 'react';
import {BackButton,NextButton} from './button';

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items : [],
            text : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState( {text: e.target.value} );
      }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const inputText = this.state.text;
        // const inputItem = inputText => {
        //     return(
        //         <div>
        //             <div className='white'>
        //                 <p> {inputText} </p>
        //             </div>
        //             <div>
        //                 <input type = 'checkbox'/>
        //             </div>
        //         </div>
        //     )
        // }
        // console.log(inputItem());
        const newItem = {
            text: inputText,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    render(){
        return(
            <div className = 'mt4 mb4 flex-wrap ma3'>
                <div className='ba br2 w-40 pa2'>
                    <div>
                        <h3 className = 'tc'>Todo</h3>
                    </div>
                    <div>
                        <TodoList items={this.state.items}/>
                        <form onSubmit={this.handleSubmit} className='flex justify-center'>
                            <input id = 'new-todo' onChange = {this.handleChange} value = {this.state.text}/>
                            <button className='tc ma3'>Add #{this.state.items.length+1}</button> 
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>
                <div className = 'ba br2 pa1 ma1 flex justify-center'>
                    {item.text}
                    <BackButton/>
                    <NextButton/>
                </div>
            </li>
            
          ))}
          <li>
              <div className = 'flex'>
                <p>test</p>
                <BackButton/>
                <NextButton/>
              </div>
            </li>
            <img src={'./next.png'} alt = 'next'/>
        </ul>
      );
    }
  }

export default Todo;