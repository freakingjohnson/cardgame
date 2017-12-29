import React, { Component } from 'react';
import CardCreator from './Components/CardCreator'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <header className="App-header">
          
        </header>
        <CardCreator/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
