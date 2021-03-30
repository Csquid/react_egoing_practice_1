import React, {Component} from 'react';

class UpdateContent extends Component {

  render() {
    return (
        <form action="/create" method="post" onSubmit={(e)=> {
          let _title = e.target.title.value;
          let _description = e.target.description.value;
          e.preventDefault();
          
          this.props.onUpdatePage(_title, _description);
        }}>
          <input name="title" placeholder="title" defaultValue={this.props.title}></input>
          <textarea name="description" placeholder="description" defaultValue={this.props.description}></textarea>
          <input type="submit" value="Create"></input>
        </form>
    );
  }
}

export default UpdateContent;
