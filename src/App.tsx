import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs } from './components/Tabs';


const items = [
  { title: 'All', content: 'All content' },
  { title: 'My favorites', content: ' My favorites content' },
  { title: 'Popular', content: ' Popular content' },
];
function App() {
  return (
    <div className="App">


<Tabs items={items} />
    </div>
  );
}

export default App;
