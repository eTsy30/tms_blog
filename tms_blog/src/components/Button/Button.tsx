
import React from 'react'
import'./Button.css'
import clsx from 'clsx'
import { ReactComponent as SvgBwi } from '../image/buttonWithIcon.svg'
import { ReactComponent as Like } from '../image/like.svg'
import { ReactComponent as Dislike } from '../image/like.svg'
//  import {SvgReader} from '../SvgReader/SvgReader'

type Bprops ={
    text?: string,
    onClick: ()=>void,
    className:string,
    disabled?: boolean,
    icon?: string | undefined,
}
 export const Button = (props:Bprops)=>{
    const chooseID: {[index: string]:any}={
        SvgBwi :<SvgBwi className='buttonImg'/> ,
        Like : <Like className='buttonImg'/> ,
        Dislike:<Dislike className='buttonImg'/>,
 
    } 
     return(
     <button type='button' 
     
        disabled={props.disabled} 
        className={clsx(props.className,'ourButtonStyle'
            )}
        onClick={props.onClick}>
      {props.icon  &&  chooseID[props.icon] }
         {props.text}
    </button>)
 }
 