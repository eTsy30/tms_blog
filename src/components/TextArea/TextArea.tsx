import React, { useState } from "react";
import './TextArea.css'

    type NameFormProps={
        placeholder?:string,
        className ?:string
        disabled?: boolean
    
    }
   export const TextAreaForm = (props:NameFormProps) => {
       
       
        return (
          <div  className={`wraperTextArea ${props.className}`} >
            <label  className="pInput">
              TextArea:
              <textarea ></textarea>
            </label>
           
          </div>
        );
      }