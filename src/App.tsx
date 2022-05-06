import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './components/Inputs'
function App() {
  return (
    <div className="App">
      <Input title='Title'  placeholder='placeholder' type='email'></Input>
      <Input  disabled title='Title'  placeholder='placeholder' type='email'></Input>
      <Input  title='Title' placeholder='placeholder' type='text'></Input>
    </div>
  );
}

export default App;
