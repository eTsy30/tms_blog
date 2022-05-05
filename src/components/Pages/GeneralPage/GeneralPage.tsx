import React from "react";
import {Header} from '../../elementary/Header/Header'

import './GeneralPage.css'
type PropSingIn={
    label:string
    className:string
}
export const GeneralPage=({label,className,children}:PropSingIn| any)=>{
    console.log(children);
    
    return(<div className="GeneralPage-Wraper">
          <Header/>  
          <div className='GeneralPage-Wrapper-In'>
       <div className="GeneralPage-left"> </div>
       <div className="GeneralPage-centre">
       <p className="SingIn-Main-Label">{label}</p>
           {children}
       </div>
       <div className="GeneralPage-right"></div>
        </div>
        
        <div className="GeneralPage-Footer-Wrapper">
               <div className="GeneralPage-Footer-Left">©2022 Blogfolio</div>
               <div className="GeneralPage-Footer-right">All rights reserved</div>
           </div>
    </div>
        

    )
}