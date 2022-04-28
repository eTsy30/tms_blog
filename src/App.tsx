import React from 'react';

import './App.css';
import{Button} from './components/Button/Button'
import {InputForm} from './components/Inputs/Input'
import{DicktopBlokElement} from './components/DicktopBlokElement/DicktopBlokElement'
import {MiniCard} from './components/MiniCard/MiniCard'
import{PromoCard} from './components/PromoCard/PromoCard'
import{TextAreaForm} from './components/TextArea/TextArea'
import {Header} from './components/Header/Header'
import {SingIn} from './components/Pages/SingIn/SingIn'
import {SingUp} from './components/Pages/SingUp/SiugUp'


function App() {
  function logg():void{
    return console.log('123',new Date()); 
  }
  return ( <div className='App'>
    <SingIn label='Sing In' className='InputHeightIn'/>
    <SingUp/>
     <Header/>
    <Button  text='Primary' className='primary' onClick={logg} />
    <Button  text='Secondary' className='secondary'onClick={logg} />
    <Button   text='Secondary 2' className='secondary2' onClick={logg} />
    <Button   text='Button with icon' className='ButtonWithIcon' onClick={logg} icon='SvgBwi'/>
    <Button  className='like' onClick={logg}  icon='Like'/>
    <Button   className='dislike'  onClick={logg}  icon='Dislike'/>
    <br />
    <InputForm label='pas' placeholder='Placeholder' type='password' className=''/>
    <InputForm  label='email' placeholder='Placeholder'  type='email' className='defaultImp' />
    <InputForm  label='email' placeholder='Placeholder'  type='text' className='defaultImp' />
    <br />
    <br />
    <br />

   <TextAreaForm className='qqq'/>
   <br /><br /><br />
    <MiniCard/>
    <br /><br /><br />

    <DicktopBlokElement className='wrapper'/>
    <br /><br /><br />
    <PromoCard className='PromoWrapper'/>
    
  </div>
  


  );
}

export default App;
