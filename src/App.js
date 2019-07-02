import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Store from './store';
import Header from './Header';
import MainPage from './Main-Page';
import NotePage from './Note-Page';
import MainSidebar from './Main-Sidebar';
import NoteSidebar from './Note-Sidebar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: Store.folders,
      notes: Store.notes,
      currentFolder: ''
    };
  }

  setCurrentFolder = (folderId) => {
    this.setState({
      currentFolder: folderId
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <Switch>
          <Route path='/note/:noteId' component={NoteSidebar} />
          <Route path='/'
            render={() => {
              return (
                <MainSidebar
                  setCurrentFolder={this.setCurrentFolder}
                  folders={this.state.folders}
                />
              );
            }} />
        </Switch>

        <Switch>
          <Route path='/note/:noteId' component={NotePage} />
          <Route path='/'
            render={() => {
              const notes = this.state.currentFolder ?
                this.state.notes.filter(note => note.folderId === this.state.currentFolder) :
                this.state.notes;
              return <MainPage
                notes={notes}
                folders={this.state.folders}
              />
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
