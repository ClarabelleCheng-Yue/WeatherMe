import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  WeatherListItem(data) {
    const channel = data.query.results.channel;
    const { city, country, region } = channel.location;
    const hi_temp = channel.item.forecast.map( weather => { return parseInt(weather.high); } );
    const lo_temp = channel.item.forecast.map( weather => { return parseInt(weather.low) } );
    const descriptions = channel.item.forecast.map( weather => { return weather.text });
    const dates = channel.item.forecast.map( weather => { return weather.date } );

    return (
      <tr key={ city }><td>
      <table className="table">
        <thead>
          <tr><th>{ city }, { region }, { country }</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>{ dates.map((date, i) => { return <th className="text-center" key={ i }>{ date }</th>; }) }
                  </tr>
                </thead>
                <tbody>
                  <tr><td></td>{ descriptions.map((text, i) => { return <td className="text-center" key={ i }>{ text }</td>; }) }</tr>
                  <tr><td><b>Highs</b></td>{ hi_temp.map((hi, i) => { return <td className="text-center" key={ i }>{ hi }</td>; }) }</tr>
                  <tr><td><b>Lows</b></td>{ lo_temp.map((lo, i) => { return <td className="text-center" key={ i }>{ lo }</td>; }) }</tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </td></tr>
    );
  }

  setLocation(data) {
    console.log('set loc: ', data);
    if (data.length > 0) {
      const channel = data[0].query.results.channel;
      const { city, country, region } = channel.location;

      return city + ', ' + region + ', ' + country;
    } 
  }

  render() {
    return (
      <div>
      <table>
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

/*
this.setLocation(this.props.weather)

<thead className="table_header">
          <tr><th><h3>{ this.setLocation(this.props.weather) }</h3></th></tr>
        </thead>
*/

export default connect(mapStateToProps)(WeatherList);