var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const database = require('./Database/connect');

var indexRouter = require('./routes/index');
var bookRouter = require('./features/bookFeatures/routers/book');
var authRouter = require('./features/userFeatures/routers/auth');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { isLoggedIn } = require("./middlewares/authMiddleware");

var app = express();

const swaggerDefinition = {
    openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Le Phuong Trung',
      url: 'https://www.facebook.com/Peoplenogiveup',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};
  
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./features/*/Routers/*.js'],
  };
  
const swaggerSpec = swaggerJSDoc(options);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', authRouter);
app.use('/bookapi', isLoggedIn, bookRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//IIFE
(async () => {
    await database.connectDatabase();
})();
module.exports = app; 
