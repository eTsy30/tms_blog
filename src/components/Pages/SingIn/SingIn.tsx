import React from "react";
import {Header} from '../../Header/Header'
import {InputForm} from '../../Inputs/Input'
import{Button} from '../../Button/Button'
import './SingIn.css'
function logg():void{
    return console.log('123',new Date());
    
  }
export const SingIn=()=>{
    return(<div>
          <Header/>  
          <div className="SingIn-Wrapper">
       <div className="SingIn-left"> </div>
       <div className="SingIn-centre">
           <a  className="SingIn-link-Back">Back to home</a>
           <p className="SingIn-Main-Label">Sign In</p>

           <div className="SingIn-Input-Wrapper">
           <InputForm placeholder="Your email" type="email" label="Email" className='defaultImp'/>
           <InputForm placeholder="Password" type="password" label="Password" className='defaultImp'/>
           <a href="#" className="SingIn-Input-link_fogot">Forgot password?</a>
           <br />
           <Button  text='Sign In' className='SingIn-Button-SingIn' onClick={logg}/>
           <span className="SingIn-Down-Span">Don’t have an account? <a href="#">Sign Up</a> </span>
           </div>
       </div>
       <div className="SingIn-right"></div>
        </div>
    </div>
        

    )
}