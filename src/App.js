import React,{Component} from 'react';
import TodoList from './TodoList';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:[],
      text:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  render(){
    return (
      <div className='fl w-third tc'>
        <h3>TODO</h3>
        <TodoList items={this.state.items}/>
        <div>
        <label htmlFor='new-todo'>
            What needs to be done?
          </label>
          </div>
        <form onSubmit={this.handleSubmit}>
          
          <input type='text' 
          id='new-todo' 
          onChange={this.handleChange} 
          value={this.state.text}/>
          {/* {console.log(this.state.text)}
          {console.log(this.state)} */}
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }
  handleChange(e) {
    this.setState({text:e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    if(!this.state.text.length){
      return;
    }
    const newItem = {
      text:this.state.text,
      id:Date.now()
    }
    this.setState(state => ({
      items:this.state.items.concat(newItem),
      text:''
    }));
  }
}

export default Todo;