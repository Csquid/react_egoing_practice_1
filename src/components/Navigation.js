import React, {Component} from 'react';

class Navigation extends Component {
  state = {}
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">HTML</a></li>
          <li><a href="/">CSS</a></li>
          <li><a href="/">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
