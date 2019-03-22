// Reducers process actions, modify their data and return some new data.

// look from documentation id the export id default or named.
import { combineReducers } from 'redux'

// Song list reducer (static array)
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '3:03' },
    { title: 'Macarena', duration: '4:33' },
    { title: 'All Star', duration: '4:23' },
    { title: 'Everybody', duration: '3:54' }
  ]
}

// Selected song reducer, action returned from selectSong action creator
const selectedSongReducer = (selectedSong = 0, action) => {
  if (action.type === 'SONG_SELECTED') {
    // returns new selected song
    return action.payload
  }
  // returns currently selected song
  return selectedSong
}

// any other file has access of this combined set of reducers.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

