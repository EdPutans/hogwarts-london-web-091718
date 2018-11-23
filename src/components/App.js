import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from './porkers_data';
import Hoglist from './Hoglist'
import {Menu, Checkbox} from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: [],
      filterByGreased: false,
      sortByWeight: false,
      sortByName: false
    }
  }

  componentDidMount() {
    this.setState({
      hogs
    })
  }

  getFilteredAndSortedHogs() {
    const filteredHogs = this.state.filterByGreased ?
      this.state.hogs.filter(hog => hog.greased) :
      this.state.hogs.slice()
  
    if (this.state.sortByWeight) {
      filteredHogs.sort((a,b) => a.weightRatio - b.weightRatio)
    }
  
    if (this.state.sortByName) {
      filteredHogs.sort((a,b) => a.name.localeCompare(b.name))
    }

    return filteredHogs
  }

  filterHogs () {
    this.setState({
      filterByGreased: !this.state.filterByGreased
    })
  }

  sortWeight () {
    this.setState({ 
      sortByWeight: !this.state.sortByWeight
    })
  }

  sortName () {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  render() {
    return (
      <div className="App">
        < Nav />
        < Menu>
          <Menu.Item>
            <Checkbox toggle id="filterByGreased" label="Greased?" onClick={() => this.filterHogs()}/>
          </Menu.Item>
          <Menu.Item>
            <Checkbox toggle id="sortByWeight" label="Sort By Weight"  onClick={() => this.sortWeight()} />
          </Menu.Item>
          <Menu.Item>
            <Checkbox toggle id="sortByName" label="Sort By Name" onClick={() => this.sortName()} />
          </Menu.Item>
        </Menu>
        < Hoglist hogs={ this.getFilteredAndSortedHogs() } />
      </div>
    )
  }
}

export default App;
