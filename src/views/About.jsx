const React = require('react');
const DefaultLayout = require('./DefaultLayout');

const About = () => {
  return(
    <DefaultLayout title="About">
        <p>
            This web application was made in NodeJS with ExpressJS and using MapBox and OpenWeatherMap APIs.
        </p>
        <p>
          More info in my GitHub: <a href="https://github.com/luanmds">github.com/luanmds</a>
        </p>
    </DefaultLayout>
  )
}

module.exports = About;