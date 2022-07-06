import './App.css';
import React from 'react';
import Greet from './components/greet'
import Welcome from './components/welcome';
//import Hello from './components/hello';
function App() {
  return (
    <div className="App">
      <Greet name="Sasi" heroname="captian">
        <p>This is children</p>
      </Greet><br/>
      <Greet name="Srinija" heroname="wanda">
        <button>Click</button>  
      </Greet><br/>
      <Greet name="Sindhu" heroname="vision"/><br/>
      <Welcome name="Sasi" heroname="captian" />
      <Welcome name="Srinija" heroname="wanda"/>
    </div>
  );
}

export default App;
