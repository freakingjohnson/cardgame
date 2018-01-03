import React, { Component } from 'react';
import ReduxCardCreator from './components/ReduxCardCreator'
// import Uploader from './components/Upload'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>

        <ReduxCardCreator/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
