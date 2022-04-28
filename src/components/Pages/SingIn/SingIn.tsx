import React from "react";
import {Header} from '../../Header/Header'
import {InputForm} from '../../Inputs/Input'
import{Button} from '../../Button/Button'
import './SingIn.css'
type PropSingIn={
    label:string
    className:string
}
export const SingIn=({label,className,UpChildren,DownChildren}:PropSingIn| any)=>{
    return(<div className="Global-Wraper-SingIn">
          <Header/>  
          <div className="SingIn-Wrapper">
       <div className="SingIn-left"> </div>
       <div className="SingIn-centre">
           <a  className="SingIn-link-Back">Back to home</a>
           <p className="SingIn-Main-Label">{label}</p>

           <div className={`SingIn-Input-Wrapper ${className}`}>
               {UpChildren}
           <InputForm placeholder="Your email" type="email" label="Email" />
           <InputForm placeholder="Password" type="password" label="Password" />
           {DownChildren}
           <a href="#" className="SingIn-Input-link_fogot">Forgot password?</a>
           <br />
           <Button  text='Sign In' className='SingIn-Button-SingIn' />
           <span className="SingIn-Down-Span">Don’t have an account? <a href="#">Sign Up</a> </span>
           </div>
           
       </div>
       <div className="SingIn-right"></div>
        </div>
        <div className="SingIn-Footer-Wrapper">
               <div className="SingIn-Footer-Left">©2022 Blogfolio</div>
               <div className="SingIn-Footer-right">All rights reserved</div>
           </div>
    </div>
        

    )
}