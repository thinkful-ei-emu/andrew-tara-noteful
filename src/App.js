import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Store from './store';
import Header from './Header';
import MainPage from './Main-Page';
import NotePage from './Note-Page';
import MainSidebar from './Main-Sidebar';
import NoteSidebar from './Note-Sidebar';
import FolderPage from './Folder-Page';
import Main from './Main';
import Sidebar from './Sidebar';

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
        <Sidebar>
          <Switch>
            <Route path='/note/:noteId' render={({history}) => {
              return <NoteSidebar
                history={history} />
            } }/> 
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
        </Sidebar>
        <Main>
          <Switch>
            <Route path='/note/:noteId' render={({match, history}) => {
              return <NotePage 
                match={match}
                history={history}
                notes={this.state.notes}
                />;
            }} />
            <Route path='/folder/:folderId' render={({match})=> {
            return <FolderPage 
              match={match}
              folders={this.state.folders}
              notes={this.state.notes} />}} /> 
            <Route path='/'
              render={() => <MainPage
                  notes={this.state.notes}
                  folders={this.state.folders}
                />
              }
            />
          </Switch>
        </Main>

      </div>
    );
  }
}

export default App;
