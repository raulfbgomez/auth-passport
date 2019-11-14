const express = require('express');
const passport = require('passport');
const MoviesService = require('../services/movies');

const {
  movieIdSchema,
  createMovieSchema,
  updatemovieSchema
} = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');

const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../utils/time');

// JsonWebToken strategy
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', passport.authenticate('jwt', { session: false }), validationHandler({ movieId: movieIdSchema }, 'params'), async function (req, res, next) {
    cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
    const { movieId } = req.params;
    try {
      const movies = await moviesService.getMovie({ movieId });
      res.status(200).json({
        data: movies,
        message: 'movie retrieved'
      })
    } catch (error) {
      next(error);
    }
  });

  router.post('/', passport.authenticate('jwt', { session: false }), validationHandler(createMovieSchema), async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createdMovieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        data: createdMovieId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', passport.authenticate('jwt', { session: false }), validationHandler({ movieId: movieIdSchema }, 'params'), validationHandler(updatemovieSchema), async function (req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      const updatedMovieId = await moviesService.updateMovie({
        movieId,
        movie
      });
      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated'
      })
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', passport.authenticate('jwt', { session: false }), validationHandler({ movieId: movieIdSchema }), async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted'
      })
    } catch (error) {
      next(error);
    }
  });

}

module.exports = moviesApi;
