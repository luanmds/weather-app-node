const React = require('react');

const ForecastInfo = (props) => {

    if(props.cod !== 200 && props.message) {
        return(
            <div>
                <p>
                    <b>{props.message}. Try other location name </b>
                </p>
            </div>
        )
    }

    return(
        <div>
            <p><i className="material-icons prefix">location_on</i> Local: {props.location}</p>
            <p><i className="material-icons prefix">cloud</i> Clima: {props.weather}</p>
            <p>
                <i className="material-icons prefix">timeline</i> Temperatura: {props.temp}°C, Min: {props.temp_min}°C, Max: {props.temp_max}°C  
            </p>
        </div>
    );
}

module.exports = ForecastInfo;