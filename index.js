const express = require("express");
//const exphbs = require('express-handlebars');

//const mongoose = require('mongoose');
//const session = require('express-session');

//const MongoStore = require('connect-mongo')(session);
const config = require('./config');
const pagesRoutes = require('./routes/pages');//
const nodemailer = require('./nodemailer/index');//
//const auth = require('./auth/auth');//


//const database = require('./database');
//database

/*mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION);
mongoose.connection
    .on('error', error => console.log(error))
    .on('close', () => console.log('Database connection closed.'))
    .once('open', () => {
        const info = mongoose.connections[0];
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    });
mongoose.connect(config.MONGO_URL, {useMongoClient: true});*/

//express
const app = express();

const expressHbs = require('express-handlebars')
const hbs = require('hbs')

/*const hbs = expressHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})*/

// hbs.registerPartials(__dirname + '/views/partials')
app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts',
        defaultLayout: 'main',
        extname: 'hbs',
    })
)
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// sessions
/*app.use(
    session({
        secret: config.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        }),
        expires: new Date(Date.now() + 60 * 60 * 24 * 30)
    })
);*/

//sets ans uses
/*app.engine('hbs', hbs.engine);//для рендеринга страниц
app.set('view engine', 'hbs');*/
app.set('views', 'views');
app.use(express.static(__dirname + "/public"));
app.use(pagesRoutes);//
app.use(nodemailer);//
//app.use(auth);//


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: !config.IS_PRODUCTION ? error : {}
    });
});


app.listen(config.PORT, function () {
    console.log(`Server has been started...${config.PORT}`)
})
