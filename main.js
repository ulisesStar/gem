var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');

//- Rutas

var routes = require('./http/routes');
var routeUsuario = require('./http/routes/routeUsuario');
var routeElementos = require('./http/routes/routeElementos');
var routeEventos = require('./http/routes/routeEventos');
var routeImagenes = require('./http/routes/routeImagenes');
var routeNiveles = require('./http/routes/routeNiveles');
var routeAlbum = require('./http/routes/routeAlbum');
var routeFotos = require('./http/routes/routeFotos');
var routePortadas = require('./http/routes/routePortadas');



// - Conexion a la base de datos

var con = require('./http/connection');
// require('./conf/auth')(app);

// - Middlewares

var lessMiddleware = require('less-middleware')

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(flash());

app.use(session({secret: '01f4845/564564/6@@fas588--[[}++', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

morgan('combined', {skip: function (req, res) { return res.statusCode < 400 }});

app.use('/', routes);
app.use('/', routeUsuario);
app.use('/', routeElementos);
app.use('/', routeEventos);
app.use('/', routeImagenes);
app.use('/', routeNiveles);
app.use('/', routeAlbum);
app.use('/', routeFotos);
app.use('/', routePortadas);


app.use(lessMiddleware(__dirname + '/assets'));

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'http')));

module.exports = app;
