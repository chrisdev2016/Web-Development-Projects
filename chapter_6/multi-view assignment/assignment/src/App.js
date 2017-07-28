import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'
import About from './about.js'
import TodoApp from './todos.js'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">


        <nav className="navbar navbar-default">
          <div className="container-fluid">
            < div className="navbar-header">

            </div>

            <ul className="nav navbar-nav">
              <li> <Link to='/about'>About</Link></li>
              <li><Link to='/'>My todo list</Link></li>
              <li><Link to ='/contact'> Contacts</Link></li>
            </ul>
          </div>
         </nav>

       

        
        {this.props.children}
      </div>

    );
  }
}

export default App;


