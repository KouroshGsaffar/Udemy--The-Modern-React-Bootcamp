import axios from 'axios'

const KEY = 'AIzaSyAvW1ekhaInQI24hxJ2UWsBUD5gic9_D9c'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})