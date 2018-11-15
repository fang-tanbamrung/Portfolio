import React from 'react';
import {BackButton,NextButton,CancelButton} from './button';

export const Done = ({state}) => {
    const {items} = state;
    
    const filter = items.filter(item => item.status === 'DONE')
    // console.log(filter)
    return(
        <div className = 'mt4 mb4 w-third ma3'>
            <div className='ba br2 pa2'>
                <div>
                    <h3 className = 'tc'>Done</h3>
                </div>
                <div>
                    <TodoList items={filter}/>
                    
                </div>
            </div>
        </div>
    )
}

class TodoList extends React.Component {
    render() {
      return (
        <ul className = 'list pl0'>
          {this.props.items.map(item => (
            <li key={item.id}>
                <div className = 'flex ba br2 b--white-50 bg-white-20'>
                    <div className = 'pl2 yellow'>
                        <p>{item.text}</p>
                    </div>
                    <div className = 'flex justify-end ma2 w-100'>
                        <BackButton/>
                        <CancelButton/>
                    </div>
                </div>
            </li>
            
          ))}
        </ul>
      );
    }
  }
