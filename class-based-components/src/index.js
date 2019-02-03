import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DisplaySeason from './DisplaySeason'
import Spinner from './spinner'

class App extends Component {

  state = { lat: null, errorMessage: '' }

  // right place to load data.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <DisplaySeason lat={this.state.lat} />
    }
    //if (!this.state.errorMessage && !this.statelat) {
    return <Spinner message="Please accept location request" />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
