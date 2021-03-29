import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Controll from './components/Controll';
import Content from './components/Content';

class App extends Component {
  render() { 

    return ( 
      <div className="App">
        <Header></Header>
        <Navigation></Navigation>
        <Controll></Controll>
        <Content></Content>
      </div>
    );
  }
}
 
export default App;