import React, { Component } from 'react'
import youtube from './api/youtube';
import SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList';

export default class App extends Component {
  state = { videos: [], selectedVideo: null }
  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items })
  }

  onVideoSelect = (video) => {
    console.log('From the App', video)
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}


