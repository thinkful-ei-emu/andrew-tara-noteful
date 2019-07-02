import React from 'react';
import Sidebar from './Sidebar'
import NoteList from './note-list'

class MainPage extends React.Component {

  render() {
    return (
    <div>
      <Sidebar folders={this.props.folders}/>
      <NoteList notes={this.props.notes}/>
    </div>);
  }
}

export default MainPage;