
import React from 'react'
import'./Button.css'
import clsx from 'clsx'
import { ReactComponent as SvgBwiIcon } from '../image/buttonWithIcon.svg'
import { ReactComponent as LikeIcon } from '../image/like.svg'
import { ReactComponent as DislikeIcon } from '../image/like.svg'


type Buttonprops ={
    text?: string,
    onClick?: ()=>void,
    className:string,
    disabled?: boolean,
    icon?: string | undefined,
}
 export const Button = ({text,onClick,className,disabled,icon}:Buttonprops)=>{
    const chooseID: {[index: string]:any}={
        SvgBwi :<SvgBwiIcon className='buttonImg'/> ,
        Like : <LikeIcon className='buttonImg'/> ,
        Dislike:<DislikeIcon className='buttonImg'/>,
 
    } 
     return(
     <button type='button' 
     
        disabled={disabled} 
        className={clsx(className,'ourButtonStyle'
            )}
        onClick={onClick}>
      {icon  &&  chooseID[icon] }
        <span>{text}</span>
    </button>)
 }
 