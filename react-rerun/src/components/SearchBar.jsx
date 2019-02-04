import React, { Component } from 'react'

 class SearchBar extends Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmitSearchBar = (event) => {
    event.preventDefault()
    // Parent is told what the search term is
    this.props.onFormSubmitApp(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmitSearchBar} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
            type="text" 
            value={this.state.term}
            onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
