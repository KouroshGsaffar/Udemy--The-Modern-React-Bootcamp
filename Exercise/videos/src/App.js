import React, { Component } from 'react'
import SearchBar from "./components/SearchBar";

export default class App extends Component {
  state = { searchTerm: [] }
  onSearchSubmit = (term) => {
    this.setState({ searchTerm: term })
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}


