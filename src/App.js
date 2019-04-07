import React, { Component } from 'react'
import { AppRegistry } from 'react-native';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}

AppRegistry.registerComponent('redd-ish', () => App);

export default App;
