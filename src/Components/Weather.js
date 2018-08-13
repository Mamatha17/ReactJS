import React from "react";


const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country &&
            <h1 className="title-container__title"> Weather Details</h1>
        }
        {
            props.city && props.country && <p className="weather__key">Location:
                <span className="weather__value"> {props.city},{props.country}</span></p>
        }
        {
            props.temperature && <p className="weather__key">Temperature:
                <span className="weather__value"> {props.temperature}</span></p>
        }
        {
            props.humidity && <p className="weather__key"> Humidity:
                <span className="weather__value"> {props.humidity}</span></p>
        }
        {
            props.description && <p className="weather__key"> Description:
                <span className="weather__value"> {props.description}</span></p>
        }
        {
            props.latitude && <p className="weather__key"> Latitude:
                <span className="weather__value"> {props.latitude}</span></p>
        }
        {
            props.longitude && <p className="weather__key"> Longitude:
                <span className="weather__value"> {props.longitude}</span></p>
        }
        {
            props.error && <span className="weather__error"> <u><b>ERROR:</b></u> {props.error}</span>
        }
    </div>
);

export default Weather;