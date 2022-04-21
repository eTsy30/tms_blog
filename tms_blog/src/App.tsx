import React from 'react';
import logo from './logo.svg';
import './App.css';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import{Button} from './components/Button/Button'
import {Input} from './components/Inputs/Input'
import {NameForm} from './components/Inputs/Input'
import bBwi from './components/image/11.png'
import dis from './components/image/33.png'
import like from './components/image/22.png'
function logg():void{
  return console.log('123',new Date());
  
}

function App() {
  return ( <div className='App'>
    <Button disabled text='Primary' className='primary' onClick={logg} />
    <Button text='Secondary' className='secondary'onClick={logg} />
    <Button  text='Secondary 2' className='secondary2' onClick={logg} />
    <Button text=' Button with icon' className='ButtonWithIcon' onClick={logg} icon={bBwi}/>
    <Button  disabled className='like' onClick={logg}  icon={dis}/>
    <Button  disabled className='dislike' onClick={logg}  icon={like}/>
    {/* <Input text='Title' value='Placeholder' className='defaultImp'/> 
    <Input text='Title'   className='defaultImp'/>  */}
    <NameForm  placeholder='some1' className='defaultImp'/>
    <NameForm  placeholder='some2' className='defaultImp' disabled/>
  </div>
  

>>>>>>> Stashed changes
  );
}

export default App;
