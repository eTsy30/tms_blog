import React from "react";
import { SingIn } from "../SingIn/SingIn";
import { InputForm } from "../../Inputs/Input";

export const SingUp =()=>{
     return (<SingIn className='InputHeightUp' 
             label='Sing Up' 
             UpChildren={<InputForm placeholder="Your name" type="text" label="Name" className='SingUP-Imput-Name'/>} 
             DownChildren={<InputForm placeholder="Confirm password" type="text" label="Confirm password" className='SingUP-Imput-Password'/>
               }/>
)}