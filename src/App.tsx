import React from 'react';
import logo from './logo.svg';
import Calc_main from './components/Calc_main';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <h3>Geotechnical Reduction Factor</h3>
          <i>(as per AS2159.2009)</i>
        </p>
        
        <div style={{padding: '10px'}}>
          <Calc_main/>
        </div>
    </div>
  );
}

export default App;
