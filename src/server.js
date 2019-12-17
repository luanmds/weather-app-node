const express = require('express');
const path = require('path');
const {createEngine} = require('express-react-views');
const weatherRouter = require('./routes/weather');

const app = express();

// set folder and file extensions and React Engine
app.set('views', path.resolve('./src/views')); 
app.set('view engine', 'jsx');
app.engine('jsx', createEngine()); 

// set static for css, js and img folder public
const pathDirectoryStatic = path.join(__dirname, '../public');
app.use(express.static(pathDirectoryStatic));
app.use('/favicon.ico', express.static(pathDirectoryStatic + '/img/favicon.ico'));


// Routes Views
app.get("/", (req, res) => res.render('Home'));
app.get("/about", (req, res) => res.render('About'));

// Routes API
app.use('/api/weather', weatherRouter);

// function for handle errors 404 and 500
app.use((req, res, next) => {
    res.status(404).render('errors/Page404', {url: req.url});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    if (req.xhr) {
        res.status(500).send({ cod:500, message:'Something failed!' });
    } else {
        res.status(500);
        res.render('errors/Page500', { message: 'Ops! 500 - Server Error.' });
    }

});

const PORT = process.env.PORT || 3000;
app.listen(PORT);