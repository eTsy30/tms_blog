import { log } from 'console'
import React from 'react'
import'./Button.css'
import clsx from 'clsx'
type Bprops ={
    text?: string,
    onClick: ()=>void,
    className:string,
    disabled?: boolean,
    icon?: string | undefined,
}
 export const Button = (props:Bprops)=>{
    
     return(
     <button type='button' 
      
        disabled={props.disabled} 
        className={clsx(props.className,'ourButtonStyle',{
            'buttonDisable':props.disabled}
            )}
        onClick={props.onClick}>
      {props.icon  && <img  className='buttonImg' src={props.icon} />}
         {props.text}
    </button>)
 }
 