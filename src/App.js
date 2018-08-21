import React from 'react'
import Form from './Components/Form'
import Weather from './Components/Weather'
import GoogleMaps from "google-map-react"

const APIKey = "e7f831aa7fb73d5a60f6a1f6416caa7d";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    latitute: undefined,
    longitude: undefined,
    error: undefined,
    mapIsReady: false,
  }
  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKey}&units=metric`);
    const data = await url.json();
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.humidity,
        description: data.weather[0].description,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        mapIsReady: true,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        latitude: undefined,
        longitude: undefined,
        error: "Please enter city and country.",
        mapIsReady: false,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <h1> Weather Report </h1>
                  <Form getweather={this.getweather} />
                  <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    error={this.state.error}
                  />
                </div>
                <div className="col-xs-7 form-container">
                  <center><h1 className="title-container__subtitle"> Selected Location in MAP will be displayed here. </h1></center>
                  <GoogleMaps
                    apiKey={"AIzaSyAqx1hARHz25ULmiOkurbUzbujqN7JJ6MM"}
                    style={{ height: "300px", width: "100%" }}
                    zoom={10}
                    center={{ lat: this.state.latitude, lng: this.state.longitude }}
                    markers={{ lat: this.state.latitude, lng: this.state.longitude }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
