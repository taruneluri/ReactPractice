import './App.css';
import React from 'react';
import Greet from './components/greet'
import Welcome from './components/welcome';
import Hello from './components/hello';
function App() {
  return (
    <div className="App">
      <Greet/><br/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
