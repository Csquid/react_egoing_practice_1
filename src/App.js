import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Controll from './components/Controll';
// import Content from './components/Content';
import ReadContent from './components/Content/ReadContent';
import CreateContent from './components/Content/CreateContent';
import UpdateContent from './components/Content/UpdateContent';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mode: 'welcome',
      modeEve: null,
      listNowIDX: 0,
      listLastIDX: 2,
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
    
    let _welcome      = this.state.welcome;
    let _nav_lists    = this.state.nav_lists;
    let _now_list     = getList();
    let _title        = _now_list.title;
    let _description  = _now_list.description;
    let _article      = null;

    switch (this.state.mode) {
      case 'read':
        _article = <ReadContent title={_title} description={_description}></ReadContent>
        break;
      case 'create':
        _article = <CreateContent onCreatePage={(nTitle, nDescription) => {
          let temp_lists = Array.from(this.state.nav_lists);
          let _listLastIDX = this.state.listLastIDX + 1;

          temp_lists.push({
            id: _listLastIDX,
            title: nTitle,
            description: nDescription
          });
          
          this.setState({
            nav_lists: temp_lists,
            mode: 'read',
            modeEve: 'read',
            listLastIDX: _listLastIDX,
            listNowIDX: _listLastIDX
          });
        }}></CreateContent>
        break;

      case 'update':
        
        break;
      case 'delete':
        // 여기서는 delete를 처리하지 않는다.
        // 기본적으로 함수를 이용하여 처리하여 버그를 줄이기 위해서
        break;
      default:
        break;
    }
    return ( 
      <div className="App">
        <Header title={_welcome.title} description={_welcome.description}></Header>
        <Navigation lists={_nav_lists} onClickPage={(idx)=> {
          this.setState({
            mode: 'read',
            modeEve: 'read',
            listNowIDX: Number(idx)
          })
        }}></Navigation>
        <Controll onChangePage={(nMode) => {
          this.setState({
            mode: nMode,
            modeEve: nMode
          })
        }}></Controll>
        {_article}
      </div>
    );
  }
}
 
export default App;