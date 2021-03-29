import React, {Component} from 'react';

class Content extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Content;
