import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// user searches for a location of which to get the weather
class SearchBar extends Component {
  constructor(props) {
    super(props);
    // initial search query is ''
    this.state = {location: ''};
  }

  // user changes the search query
  onInputChange(event) {
    // show change on screen
    this.setState({location: event});
  }

  // submit the search query
  onFormSubmit(event) {
    // prevent default refresh
    event.preventDefault();

    // get the weather at the submitted location
    this.props.fetchWeather(this.state.location);
    // reset location state
    this.setState({location: ''});
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit.bind(this)}>
        <input 
          placeholder="Enter a city"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <span>
          <button type="submit">Weather me!</button>
        </span>
      </form>
    );
  }
}

// hook up action creator fetchWeather to SearchBar container
function mapDispathToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// connect SearchBar container to redux store
export default connect(null, mapDispathToProps)(SearchBar);