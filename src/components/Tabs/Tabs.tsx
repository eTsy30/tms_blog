import { log } from "console";
import { type } from "os";
import React, { useState } from "react";
import './Tabs.css'
type TybeProps={
  title:string, 
  content:any 
}
const TabContent = ({ title, content }:TybeProps) => (
  <div className="Tab__block--Contetn">
    <h3>{title}</h3>
    <div>{content}</div> 
  </div>
);

export const Tabs =({items}:any)=>{
  const [active,setActive]=useState(0)
  const openTab = (e:any)=> setActive(+e.target.dataset.index);


  
    return(
      <div>
        <div className="Tabs__wrapper">
          {items.map((el:any,index:number)=>(
 
            <button
            
            className={`Tab__block  ${index === active ? 'Tab__block__active' : console.log(index, active )}`}
              onClick={openTab}
           
            data-index={index}
          >{el.title}</button>
          ))}
        </div>  
        
    { items[Number(active)] &&  <TabContent {...items[Number(active)]}/>} 
    </div>
  )
}
