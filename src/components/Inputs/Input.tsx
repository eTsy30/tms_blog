import React, { useState } from "react";
import validator from 'validator/index'
import './Input.css'
import { log } from "console";

    type NameFormProps={
    handleSubmit? :()=>void,
        placeholder:string,
        className? :string
        disabled?: boolean
        label :string
        type:'text'| 'email'|'password'
    }
   export const InputForm = (props:NameFormProps) => {
        const [inputValue, setInputValue] = useState('')
        const [eror, setEror] = useState('')
        
        const handleChange = (event:any) => {
          setInputValue(event.target.value)
        console.log(props.type);
        if(props.type==='email'){ 
          if(!validator.isEmail(event.target.value)){
          setEror('Eror')
        }else{
          setEror('')
        } }

        if(props.type==='password'){
          if (validator.isStrongPassword(event.target.value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setEror('Is Strong Password')
          } else {
            setEror('Is Not Strong Password')
          }
        }
        }
        const handleSubmit = (event:any) => {
          alert('Отправленное имя: ' + inputValue);
          event.preventDefault();
        }
        return (
          <div  className={`wraperInput ${props.className}`} onSubmit={handleSubmit}>
            <label  className="pInput">
              {props.label}
              <input type={props.type} disabled={props.disabled} className={`${eror && 'errorInput'} ${ props.className}`} placeholder={props.placeholder} value={inputValue} onChange={handleChange} />
              {eror && <label className="eror">{eror}</label>}
            </label>
           
          </div>
        );
      }

