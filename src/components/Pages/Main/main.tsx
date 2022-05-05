
import React, { useState,useEffect } from "react";
import { GeneralPage } from "../GeneralPage/GeneralPage";
import{LargeCard} from '../../elementary/card/LargeCard/LargeCard' 
import {SmallCard} from '../../elementary/card/SmallCard/SmallCard'
import { Tabs } from "../../elementary/Tabs/Tads";
import{MediumCard} from '../../elementary/card/MediumCard/MediumCard'

import './main.css'
import { log } from "console";
interface ICard{
  id:number,
  label: string,
  content: string,
  image: string,
  date:number
}

export const Main =(props:any)=>{
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {setPosts(props.cards);}, 1000);
            }, []);

 
    return(
        <GeneralPage label='Blog' className ='df'>
         <> <div>
             <Tabs/> 
             <div className="parent">
              {posts.map((element:ICard,index)=>(
              <div key={index.toString()}className={`div${index}`}>
                <>
                {index===0&&<LargeCard  label={element.label} date={element.date} image={element.image} content={element.content}/>}
                {index>=1&& index<5&& <MediumCard   label={element.label} date={element.date} image={element.image}/>}
                {index>=5&& <SmallCard   label={element.label} date={element.date} image={element.image}/>}
                </>
                </div>))}

         
               
               {/*  <LargeCard date={el.date} image={el.image} content={el.}/> 
               <div className="div2"><MediumCard date='Date12345' label='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' /></div>
               <div className="div3"><MediumCard date='Date12345' label='Lorem ipsum dolor sit amet' /></div>
                <div className="div4"><MediumCard date='Date12345' label='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' /></div>
               <div className="div5"><MediumCard date='Date12345' label='Lorem ipsum dolor sit amet' /></div>
               <div className="div6"><SmallCard date='Date12345' label='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' /></div>
               <div className="div7"><SmallCard date='Date12345' label='Lorem ipsum dolor sit amet' /></div>
               <div className="div8"><SmallCard date='Date12345' label='Lorem ipsum dolor sit amet' /></div>
               <div className="div9"><SmallCard date='Date12345' label='Lorem ipsum dolor sit amet' /></div>
               <div className="div10"><SmallCard date='Date12345' label='Lorem ipsum dolor sit amet' /></div>
               <div className="div11"><SmallCard date='Date12345' label='Lorem ipsum dolor sit amet' /></div> 
                */}
              
            </div>  
            </div>
        <div></div>
        </>
        </GeneralPage>
        
    )
      
}