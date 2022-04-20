import React from 'react'
import './App.css';

import{Button} from './components/Button/Button'

import bBwi from './components/image/11.png'
import dis from './components/image/33.png'
import like from './components/image/22.png'
function logg():void{
  return console.log('123',new Date());
  
}

function App() {
  return ( <div className='App'>
          <Button 
          text='Primary' 
          
          className='primary' 
          onClick={logg} 
          />

          <Button 
          text='Secondary' 
          className='secondary' 
          onClick={logg} 
          />

          <Button 
          text='Secondary 2' 
          className='secondary2' 
          onClick={logg} 
          />
          <Button text=' Button with icon' className='ButtonWithIcon' onClick={logg} icon={bBwi}/>
          <Button  disabled={false} className='like' onClick={logg}  icon={dis}/>
          <Button  disabled={false} className='dislike' onClick={logg}  icon={like}/>

  </div>
  

  );
}

export default App;
