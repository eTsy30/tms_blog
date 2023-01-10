import React from "react";

import {InputForm} from '../../elementary/Inputs/Input'
import{Button} from '../../elementary/Button/Button'
import './SingIn.css'
type PropSingIn={
    label:string
    className:string
}
export const SingIn=({label,className,UpChildren,DownChildren}:PropSingIn| any)=>{
    return(
       <div className={` SingIn-centre `}>
           <a  className="SingIn-link-Back">Back to home</a>
           <p className="SingIn-Main-Label">{label}</p>

           <div className={`SingIn-Input-Wrapper ${className}`}>
               {UpChildren}
           <InputForm placeholder="Your email" type="email" label="Email" />
           <InputForm placeholder="Password" type="password" label="Password" />
           {DownChildren}
           <a href="#" className="SingIn-Input-link_fogot">Forgot password?</a>
    
           <Button  text='Sign In' className='SingIn-Button-SingIn' />
           <span className="SingIn-Down-Span">Don’t have an account? <a href="#">Sign Up</a> </span>
           </div>
           
       </div>
       
    
        

    )
}