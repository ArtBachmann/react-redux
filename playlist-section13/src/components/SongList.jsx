import React, { Component } from 'react'
// component ITSELF needs to connect to provider and through it to store to get what it needs.
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {

  // this.props === { songs: state.songs } 
  // helper method to map over the arreay of songs and display them.
  renderList() {
    // the first return is for returning new array of produced jsx elements.
    // the inner return is for creatin single jsx elements and returns them into brand new array created by map() array helper function.
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div >
    )
  }
}


// connect is actually react component. Every time the Store's state changes the Provider informs Connect component and Connect automatically updates what is configured to do so.(song list this time)

// takes all the state from the redux store (state) and calculates it to props to show inside the component.

const mapStateToProps = (state) => {
  console.log(state)
  return { songs: state.songs } // component SongList has now key songs with value of 4 arrays as explained (configured in reducer)
}
// add second argument selectSong action creator to connect() function
// connect() calls automatically dispatch() on action creators added as arguments to connect(). So redux can manage action creators and override the data in the store.
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList)
