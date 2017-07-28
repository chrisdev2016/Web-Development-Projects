import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './about.js'
import TodoApp from './todos.js'
import Contact from './contact.js'

var todos = [
	{ text: 'learn angular', done: false, id: 1 },
	{ text: 'write the content for the next module', done: false, id: 2 },
	{ text: 'buy cheese', done: true, id: 3 },
	{ text: 'buy milk', done: true, id: 4 },
]



ReactDOM.render(
<Router history={browserHistory}>
<Route path='/' component={App} >
  <IndexRoute component={TodoApp } />
  {/*<Route path ='/todos'component={TodoApp} tasks={todos} />*/}
  <Route path='/about' component={About}/>
  <Route path='/contact' component={Contact}/>
</Route>



</Router>,
    document.getElementById('root'));
registerServiceWorker();
