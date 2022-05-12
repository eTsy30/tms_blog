import React from 'react';
import logo from './logo.svg';
import './App.css';
import{Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/posts'>Post1</Link>
        <Link to='/posts/1'>Post1</Link>
        <Link to='/posts/add'>Post1</Link>
        <Link to='/search'>Post1</Link>
      </nav>
    </div>
  );
}

export default App;
