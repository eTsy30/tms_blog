import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {Input} from './components/Inputs'
import { TextArea } from './components/TextArea';
function App() {
  return (
    <div className="App">
      <Input title='Title'  placeholder='placeholder' type='email'></Input>
      <Input  disabled title='Title'  placeholder='placeholder' type='email'></Input>
      <Input  title='Title' placeholder='placeholder' type='text'></Input>
      <TextArea></TextArea>
=======
import {Button} from './components/Button'
function App() {
  return (
    <div className="App">
     <Button className='primary' disabled text='Primary'></Button>
     <Button className='primary'  text='Primary'></Button>
     <Button className='secondary' disabled text='Secondary'></Button>
     <Button className='secondary'  text='Secondary'></Button>
     <Button className='secondary2' disabled text='Secondary2'></Button>
     <Button className='secondary2'  text='Secondary2'></Button>
     <Button className='buttonWithIcon ' disabled text='Button with icon' icon='SvgBwi'></Button>
     <Button className='buttonWithIcon '  text='Button with icon' icon='SvgBwi'></Button>
     <Button className='like' disabled  icon='Like'></Button>
     <Button className='like'   icon='Like'></Button>
     <Button className='dislike' disabled  icon='Dislike'></Button>
     <Button className='dislike'   icon='Dislike'></Button>
>>>>>>> main
    </div>
  );
}

export default App;
