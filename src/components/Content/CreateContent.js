import React, {Component} from 'react';
import '../../css/content.css';

class CreateContent extends Component {

  render() {
    return (
        <form action="/create" method="post" onSubmit={(e)=> {
          let _title = e.target.title.value;
          let _description = e.target.description.value;
          e.preventDefault();
          
          this.props.onCreatePage(_title, _description);
        }}>
          <input name="title" placeholder="title"></input>
          <textarea name="description" placeholder="description"></textarea>
          <input type="submit" value="Create"></input>
        </form>
    );
  }
}

export default CreateContent;
