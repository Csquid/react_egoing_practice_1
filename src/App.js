import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Controll from './components/Controll';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listNowIDX: 0,
      welcome: { title: 'Welcome', description: 'Welcome React World' },
      nav_lists: [
        { id: 0, title: 'HTML',       description: 'HTML is HyperText Markup Language' },
        { id: 1, title: 'CSS',        description: 'CSS is Cascading Style Sheets' },
        { id: 2, title: 'JavaScript', description: 'JavaScript is Awesome' }
      ]
    }
  }
  render() { 
    const getList = () => {
      for(let i = 0; i < _nav_lists.length; i++) {
        if(this.state.listNowIDX === _nav_lists[i].id) {
          return _nav_lists[i];
        }
      }
    }

    let _welcome = this.state.welcome;
    let _nav_lists = this.state.nav_lists;
    let _now_list = getList();
    let _title = _now_list.title;
    let _description = _now_list.description;


    return ( 
      <div className="App">
        <Header title={_welcome.title} description={_welcome.description}></Header>
        <Navigation lists={_nav_lists} onClickPage={(idx)=> {
          this.setState({
            listNowIDX: Number(idx)
          })
        }}></Navigation>
        <Controll></Controll>
        <Content title={_title} description={_description}></Content>
      </div>
    );
  }
}
 
export default App;