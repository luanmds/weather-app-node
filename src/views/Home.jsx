const React = require('react');
const DefaultLayout = require('./DefaultLayout');

const Home = () => {
  return(
    <DefaultLayout title="Home">
      <h5>An App to get forecats from locations.</h5>

      <p>Digite um nome de uma cidade ou bairro para pegar sua última previsão.</p>
      <div className="row">
        <form className="col s12 m8 l6" id="formWeatherCity">
          <div className="input-field">
            <i className="material-icons prefix">location_city</i>
            <input placeholder="Locations's Name" id="location" name="location" type="text" className="validate"/>
            <span className="helper-text" data-error="invalid" data-success="valid"></span>
          </div>
          <button className="waves-effect waves-light btn">
            <i className="small material-icons left">search</i> search
          </button>
        </form>
        <div className="col s12 m8 l6" id="forecast"></div>
      </div>
    </DefaultLayout>
  )
}
module.exports = Home;