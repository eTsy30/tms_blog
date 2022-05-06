import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Cards';

function App() {
  return (
    <div className="App">
     <Card 
     context='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.' 
     date='April 20, 2021'
     img='https://w-dog.ru/wallpapers/1/16/531216839213056/nissan-350z-doroga-osen-listva.jpg'
     title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
     type='large'
     ></Card> 
      <Card 
     context='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.' 
     date='April 20, 2021'
     img='https://w-dog.ru/wallpapers/1/16/531216839213056/nissan-350z-doroga-osen-listva.jpg'
     title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
     type='medium'
     ></Card> 
      <Card 
     date='April 20, 2021'
     img='https://w-dog.ru/wallpapers/1/16/531216839213056/nissan-350z-doroga-osen-listva.jpg'
     title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
     type='small'
     ></Card> 
    </div>
  );
}

export default App;
