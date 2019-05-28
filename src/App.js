import React from 'react';
import Form from "./components/Form";
import TopBanner from "./components/topbanner";

function App() {
  return (
    <div className="App">
      <TopBanner/>
      <div style={{display: 'flex', justifyContent: 'Center'}}>
        <Form style={{marginTop: '50px'}}/>
      </div>
    </div>
  );
}

export default App;
