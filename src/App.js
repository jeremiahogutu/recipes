import React, { Component } from 'react';
import Form from "./components/Form";
import TopBanner from "./components/topbanner";

class App extends Component {
  getRecipe = (e) => {
    e.preventDefault();
    console.log('test');
  };

  render() {
    return (
        <div className="App">
          <TopBanner/>
          <div style={{display: 'flex', justifyContent: 'Center'}}>
            <Form getRecipe={this.getRecipe} style={{marginTop: '50px'}}/>
          </div>
        </div>
    );
  }
}

export default App;
