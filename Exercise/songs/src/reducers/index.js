import { combineReducers } from 'redux'

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'MamaCita', duration: '3:25' },
        { title: 'All Star', duration: '2:25' },
        { title: 'i Wnat It That Way', duration: '1:45' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})