import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearWeather } from '../actions/index';

class ClearButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button 
        className="btn-primary" 
        onClick={ () => { this.props.clearWeather(); } }>
        Clear All
      </button>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(ClearButton);