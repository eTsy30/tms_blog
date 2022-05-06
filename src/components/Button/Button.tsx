import React from 'react'
import'./Button.css'
import clsx from 'clsx'
import { ReactComponent as ImgButtonWithIcon } from '../image/buttonWithIcon.svg'
import { ReactComponent as IconLikeIcon } from '../image/like.svg'
import { ReactComponent as IconDislikeIcon } from '../image/like.svg'


type Buttonprops ={
    text?: string,
    onClick?: ()=>void,
    className:string,
    disabled?: boolean,
    icon?: string | undefined,
}
 export const Button = ({text,onClick,className,disabled,icon}:Buttonprops)=>{
    const chooseID: {[index: string]:any}={
        SvgBwi :<ImgButtonWithIcon className='buttonImg'/> ,
        Like : <IconLikeIcon className='buttonImg'/> ,
        Dislike:<IconDislikeIcon className='buttonImg'/>,
 
    } 
     return(
     <button type='button' 
     
        disabled={disabled} 
        className={clsx(className,'button'
            )}
        onClick={onClick}>
      {icon  &&  chooseID[icon] }
        <span>{text}</span>
    </button>)
 }