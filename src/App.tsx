import React from 'react';

import './App.css';
import{Button} from './components/elementary/Button/Button'
import {InputForm} from './components/elementary/Inputs/Input'
import{LargeCard} from './components/elementary/card/LargeCard/LargeCard'
import {MediumCard} from './components/elementary/card/MediumCard/MediumCard'
import{SmallCard} from './components/elementary/card/SmallCard/SmallCard'
import{TextAreaForm} from './components/TextArea/TextArea'
import {Header} from './components/elementary/Header/Header'
import {SingIn} from './components/Pages/SingIn/SingIn'
import {SingUp} from './components/Pages/SingUp/SiugUp'
import{GeneralPage} from './components/Pages/GeneralPage/GeneralPage'
import {Main} from './components/Pages/Main/main'
import {Tabs} from './components/elementary/Tabs/Tads'
import {cards} from'../src/components/ServerTemp/server'



function App() {
  function logg():void{
    return console.log('123',new Date()); 
  }
  return ( <div className='App'>
    
 <Main  cards={cards}/> 
 
 <GeneralPage  /> 

     <GeneralPage>
     <SingIn label='Sing In' className='InputHeightIn'/>
       </GeneralPage> 
    <GeneralPage>
    <SingUp className='SingUp-MainBlok'/>
      </GeneralPage>
    
    
    
   </div>
  
 

  );
}

export default App;
