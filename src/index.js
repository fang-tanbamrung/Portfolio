import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './component/Portfolio';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
