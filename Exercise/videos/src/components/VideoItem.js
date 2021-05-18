import React from 'react'
import './VideoItem.css'

export default function VideoItem({ video, onVideoSelect }) {
    const handleClick = () => {
        onVideoSelect(video)
    }
    return (
        <div onClick={handleClick} className='video-item item'>
            <img className='ui image' alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    )
}
