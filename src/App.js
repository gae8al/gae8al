import React from 'react';
import Winter from './components/Winter';
import Desc from './components/Desc';

function App() {
  return (
    <div style={container}>
      <Winter />
      <Desc />
    </div>
  );
}

export default App;

let container = {
  width: "700px",
  margin: "0 auto",
  padding: "50px 0",
  overflow: "hidden"
}