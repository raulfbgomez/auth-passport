const express = require('express');
const app = express()
const { config } = require('./config/index');
const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies.js');

const { 
  logErrors,
  errorHandler,
  wrapError 
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler.js');
//Body parser
app.use(express.json());

// routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors midlweares
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`)
})
