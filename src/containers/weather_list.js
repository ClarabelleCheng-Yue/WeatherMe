import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  WeatherListItem(data) {
    const channel = data.query.results.channel;
    const { city, country, region } = channel.location;
    const hi_temp = channel.item.forecast.map( weather => { return parseInt(weather.high); } );
    const lo_temp = channel.item.forecast.map( weather => { return parseInt(weather.low) } );
    const descriptions = channel.item.forecast.map( weather => { return weather.text });
    const date = channel.item.forecast.map( weather => { return weather.date } );

    return (
      <tr key={ city + region }>
        <td>{ city }, { region }, { country }</td>
        <td>
          <table>
            <thead>
              <tr>
                { descriptions.map((text, i) => { return <th key={i}>{text}</th>; }) }
              </tr>
            </thead>
            <tbody>
              <tr>{ hi_temp.map((hi, i) => { return <td className="text-center" key={i}>{hi}</td>; }) }</tr>
              <tr>{ lo_temp.map((lo, i) => { return <td className="text-center" key={i}>{lo}</td>; }) }</tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="table-responsive">
      <table className="table">
        <tbody>
          { this.props.weather.map(this.WeatherListItem) }
        </tbody>
      </table>
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);