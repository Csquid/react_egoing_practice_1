import React, {Component} from 'react';

class Navigation extends Component {
  render() {
    let _list        = this.props.lists;
    let list_content = [];

    for(let i = 0; i < _list.length; i++) {
      list_content.push(
        <li key={_list[i].id}>
          <a  href={"/content/" + _list[i].id} onClick={(e) => {
            e.preventDefault();

            this.props.onClickPage(_list[i].id);
          }}>{_list[i].title}</a>
        </li>
      );
    }

    return (
      <nav>
        <ul>
          {list_content}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
