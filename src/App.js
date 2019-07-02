import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Store from './store'
import Header from './Header'
import MainPage from './Main-Page'
import FolderPage from './Folder-Page'
import NotePage from './Note-Page'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      folders: Store.folders,
      notes: Store.notes
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' 
          render={()=> <MainPage 
            notes={this.state.notes}
            folders={this.state.folders}
          />}
        />
        <Route path='/folder/:folder-id' component={FolderPage} />
        <Route path='/note/:noteId' component={NotePage} />
      </div>
    );
  }
}

export default App;
