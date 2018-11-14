import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Resume from './component/Resume/Resume';
import TodoList from './component/TodoList/TodoList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();