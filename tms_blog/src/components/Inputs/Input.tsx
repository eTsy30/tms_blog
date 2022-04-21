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
    //========================================
    type NameFormProps={
        handleSubmit? :()=>void,
        placeholder:string,
        className :string
        disabled?: boolean
    }
   export const NameForm = (props:NameFormProps) => {
        const [inputValue, setInputValue] = useState('')
       
        
        const [eror, setEror] = useState('')
        
        const handleChange = (event:any) => {
          setInputValue(event.target.value)
          if(event.target.value.length<10){
            
            setInputValue(event.target.value)
            setEror('Eror')
          }else{
            setEror('')
          }
          
          
        }
      
        const handleSubmit = (event:any) => {
          alert('Отправленное имя: ' + inputValue);
          event.preventDefault();
        }
    
        return (
          <div  className={`wraperInput ${props.className}`} onSubmit={handleSubmit}>
            <label  className="pInput">
              Имя:
              <input type="text" disabled={props.disabled} className="defaultImp" placeholder={props.placeholder} value={inputValue} onChange={handleChange} />
              {eror && <label className="eror">ошибка </label>}
            </label>
           
          </div>
        );
      }

