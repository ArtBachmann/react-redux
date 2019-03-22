// Action creator
// named export
export const selectSong = (song) => {
  // Return an action and action ends up in  selectedSongreducer
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

