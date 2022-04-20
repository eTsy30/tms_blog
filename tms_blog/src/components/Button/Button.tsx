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
}//{onClick, text, disabled,className,icon}:ButtonProps
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
 //2. Добавить в кнопку в качестве пропсов свойства: 
// text - текст в кнопке
// onClick - функция, которая будет срабатывать при нажатии на кнопку
// disabled - свойство устанавливает атрибут тэга button в состояние disabled
// className - аналоги class в html, позволяет передать класс для стилизации кнопки
// icon - иконка, которая будет помещаться в кнопку, если такое свойство было передано