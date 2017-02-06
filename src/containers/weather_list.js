import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  WeatherListItem(data) {
    if (!data) {
      return;
    }

    const channel = data.query.results.channel;
    const { city, country, region } = channel.location;
    const hi_temp = channel.item.forecast.map( weather => { return parseInt(weather.high); } );
    const lo_temp = channel.item.forecast.map( weather => { return parseInt(weather.low) } );
    const descriptions = channel.item.forecast.map( weather => { return weather.text });
    const dates = channel.item.forecast.map( weather => { return weather.date } );

    return (
      <table key={city} className="table">
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
                  <tr><td><b>Highs (&#176;F)</b></td>{ hi_temp.map((hi, i) => { return <td className="text-center" key={ i }>{ hi }</td>; }) }</tr>
                  <tr><td><b>Lows (&#176;F)</b></td>{ lo_temp.map((lo, i) => { return <td className="text-center" key={ i }>{ lo }</td>; }) }</tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        { this.props.weather.map(this.WeatherListItem) }
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);