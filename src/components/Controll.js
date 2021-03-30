import React, {Component} from 'react';

class Controll extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="/controll/create" onClick={(e) => {
            //a 태그의 기본동작인 페이지 이동을 막는다.
            e.preventDefault();
            
            this.props.onChangePage('create');
          }}>Create</a></li>

          <li><a href="/controll/update" onClick={(e) => {
            e.preventDefault();
            
            this.props.onChangePage('update');
          }}>Update</a></li>

          <li><button onClick={(e) => {
            e.preventDefault();

            this.props.onChangePage('delete');
          }}>Delete</button></li>
        </ul>
      </div>
    );
  }
}

export default Controll;
