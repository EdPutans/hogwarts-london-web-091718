import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from './porkers_data';
import Hoglist from './Hoglist'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <Hoglist hogs={hogs} />

      </div>
    )
  }
}

export default App;
