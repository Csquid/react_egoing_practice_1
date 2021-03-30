import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Controll from './components/Controll';
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
    const getList = (type) => {
      for(let i = 0; i < _nav_lists.length; i++) {
        if(this.state.listNowIDX === _nav_lists[i].id) {
          if(type === 'list')
            return _nav_lists[i];
          else if(type === 'idx')
            return i;
        }
      }

      return null;
    }
    
    
    let _welcome      = this.state.welcome;
    let _nav_lists    = this.state.nav_lists;
    let _now_list     = getList('list');
    let _now_mode     = this.state.mode;
    let _now_idx      = getList('idx');
    let _title        = null;
    let _description  = null;
    let _article      = null;
    
    /*
     *
     *  delete를 한 직후 this.state.mode는 'welcome' 상태이다.
     *  그렇기에 && And 가 아닌 || OR 연산자로 해버리면 
     *  첫번째 조건 검사에서 true가 되어 중괄호 내로 들어가게 된다.
     *  그래서 delete 후에 create를 하게되면 [TypeError: Cannot read property 'title' of null] 라는 에러를 뿜게된다.
     * 
    */
   
    if(_now_mode !== 'welcome' && _now_list !== null) {
      _title       = _now_list.title;
      _description = _now_list.description;
    }

    switch (_now_mode) {
      case 'read':
        _article = <ReadContent title={_title} description={_description}></ReadContent>
        break;
      case 'create':
        _article = <CreateContent onCreatePage={(nTitle, nDescription) => {
          let temp_lists = Array.from(_nav_lists);
          let _listLastIDX = this.state.listLastIDX + 1;

          temp_lists.push({
            id: _listLastIDX,
            title: nTitle,
            description: nDescription
          });
          
          this.setState({
            nav_lists: temp_lists,
            mode:    'read',
            modeEve: 'read',
            listLastIDX: _listLastIDX,
            listNowIDX: _listLastIDX
          });
        }}></CreateContent>
        break;

      case 'update':
        let _listNowIDX = this.state.listNowIDX;

        _article = 
          <UpdateContent 
            title={_title} 
            description={_description} 
            onUpdatePage={(_title, _description)=> {
              let temp_lists = Array.from(_nav_lists);
              temp_lists[_listNowIDX] = {
                id: _listNowIDX, 
                title: _title,
                description: _description
              }

              this.setState({
                nav_lists: temp_lists,
                mode: 'read'
              })
            }}
          >
          </UpdateContent>
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
          if(nMode === 'delete') {
            if(this.state.modeEve !== 'read') {
              alert('read 페이지가 아닙니다.');
              return;
            }
            if (!window.confirm('Do you really want to erase  [' + _now_list.title + "]?")) {
              return;
            }
            if(this.state.nav_lists.length <= 0) {
              return;
            }

            let temp_lists = Array.from(_nav_lists);
            let remove = temp_lists.splice(_now_idx, 1);

            console.log(temp_lists);
            console.log(remove);
            
            this.setState({
              nav_lists: temp_lists,
              mode: 'welcome',
              modeEve: nMode
            });

            return;
          }
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