import React, { Component } from 'react'
import youtube from './api/youtube';
import SearchBar from "./components/SearchBar";
import VideoDetail from './components/VideoDetail';
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
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}

