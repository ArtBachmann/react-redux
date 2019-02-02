import React, {Component} from 'react'
import SearcBar from './SearchBar'

class App extends Component {

  onSearchSubmit(term) {
    console.log(term)
  }

  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearcBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
 
}

export default App

// access key : 190129094e51956dc35c2c2a514074a065318735add0822650a545b44396d4d2

// secret key : 8c97ae7343d2468d456b435b3250b5e5fff693431abfcb105b715056c1f85d4a