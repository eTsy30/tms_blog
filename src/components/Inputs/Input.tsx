import React, { useState } from "react";
import validator from 'validator/index'
import './Input.css'


    type NameFormProps={
    handleSubmit? :()=>void,
        placeholder:string,
        className? :string
        disabled?: boolean
        label :string
        type:'text'| 'email'|'password'
    }
   export const InputForm = ({placeholder,className,disabled,label,type}:NameFormProps) => {
        const [inputValue, setInputValue] = useState('')
        const [eror, setEror] = useState('')
        
        const handleChange = (event:any) => {
          setInputValue(event.target.value)
        console.log(type);
        if(type==='email'){ 
          if(!validator.isEmail(event.target.value)){
          setEror('Eror')
        }else{
          setEror('')
        } }

        if(type==='password'){
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
          <div  className='wraperInput' onSubmit={handleSubmit}>
             <label  className="pInput"> 
              <span >{label}</span>
             
              <input type={type} disabled={disabled} className={` defaultImp ${eror && 'errorInput'} ${className}`} placeholder={placeholder} value={inputValue} onChange={handleChange} />
              {eror && <label className="eror">{eror}</label>}
             </label>
           
          </div>
        );
      }

