import { log } from 'console'
import React from 'react'
import'./Button.css'
import clsx from 'clsx'
type ButtonProps ={
    text?: string,
    onClick: ()=>void,
    className:string,
    disabled?: boolean,
    icon?: string | undefined,
}
 export const Button = ({ disabled, className,text,onClick,icon}:ButtonProps)=>{
    
     return(
     <button type='button' 
      
        disabled={disabled} 
        className={clsx(className,'ourButtonStyle',{
            'buttonDisable':disabled}
            )}
        onClick={onClick}>
      {icon  && <img  className='buttonImg' src={icon} />}
         {text}
    </button>)
 }
 