import './App.css';
import React from 'react';
import Greet from './components/greet'
import Welcome from './components/welcome';
function App() {
  return (
    <div className="App">
      <Greet/><br/>
      <Welcome/>
    </div>
  );
}

export default App;
