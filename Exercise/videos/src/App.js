import React, { Component } from 'react'
import youtube from './api/youtube';
import SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList';

export default class App extends Component {
  state = { videos: [] }
  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items })
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}


