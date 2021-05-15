import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';

export default class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID WLL5TVVTRz_0UpJDS8nPCdu6uVDxhmiTBJlWtAXcs3Y',
      },
    })
    console.log(response.data.results)
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}
