import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { GeneralPage } from './components/GeneralPage/GeneralPage';
function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Footer></Footer> */}
      <GeneralPage></GeneralPage>

    </div>
  );
}

export default App;
