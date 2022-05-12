import React from 'react';
import logo from './logo.svg';
import './App.css';
import{Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/posts'>Posts</Link>
        <Link to='/posts/1'>Post 1</Link>
        <Link to='/posts/add'>Add</Link>
        <Link to='/search'>Search</Link>
      </nav>
    </div>
  );
}

export default App;
