import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearWeather } from '../actions/index';

class ClearButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.weather.length > 0) {
      return (
        <button 
          className="btn" 
          id="clear_btn"
          onClick={ () => { this.props.clearWeather(); } }>
          Clear All
        </button>
      );
    }
    
    return <div></div>
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(ClearButton);