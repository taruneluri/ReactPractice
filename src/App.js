import './App.css';
import React from 'react';
import Greet from './components/greet'
//import Welcome from './components/welcome';
//import Hello from './components/hello';
function App() {
  return (
    <div className="App">
      <Greet name="Sasi"/><br/>
      <Greet name="Srinija"/><br/>
      <Greet name="Sindhu"/><br/>
      
    </div>
  );
}

export default App;
