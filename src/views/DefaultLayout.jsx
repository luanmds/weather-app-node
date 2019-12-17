const React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="css/materialize.min.css"/>
        <link rel="stylesheet" href="css/style.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Weather App | {props.title}</title>
      </head>
      <body>
        <header>
          <nav className="red darken-3">
            <div className="nav-wrapper container">
              <a href="/" className="brand-logo">Weather<i className="material-icons">cloud</i></a>
              <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-desktop" className="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
          </nav>

          <ul id="nav-mobile" className="sidenav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </header>
        
        <main>
          <div className="container">
            {props.children}
          </div>
        </main>

        <footer className="page-footer transparent">
            <div className="container row col s12 black-text">
              <hr/>
              <p>Application By luanmds</p>
            </div>
        </footer>

        <script src="js/materialize.min.js"></script>
        <script src="js/api-weather.js"></script>
      </body>
    </html>
  );
}
 
module.exports = DefaultLayout;