import React, { Component } from 'react';
import CardCreator from './Components/CardCreator'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>

        <CardCreator/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
