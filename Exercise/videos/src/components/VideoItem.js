import React from 'react'

export default function VideoItem({ video }) {
    return (
        <div>
            <img alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
            {video.snippet.title}
        </div>
    )
}
