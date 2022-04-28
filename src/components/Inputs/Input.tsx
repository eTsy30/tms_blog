import React, { useState } from "react";
import clsx from 'clsx'
import './Input.css'
import { log } from "console";
type InpPropr={
    className:string,
    disabled?:boolean,
    text:string
    value?: string
}

export const Input =(props:InpPropr)=>{
    const [count, setValue] = useState('')
    console.log(setValue);
    
    return(
<div className="wraperInput">
    <p className="pInput">{props.text}</p>
    <input type='text'  
           onChange={evetn=>{
               //как убрать значение props.value из input
               setValue(evetn.target.value)}} 
           disabled={props.disabled} value={props.value} 
           className={clsx(props.className,{inputDisable:props.disabled})}>
    </input>
</div>
    )}


