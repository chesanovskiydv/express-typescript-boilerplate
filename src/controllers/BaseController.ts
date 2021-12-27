import express from 'express';

abstract class BaseController {
  public router = express.Router();

  protected abstract initRoutes(): void;

  // wrap functions so that all of async errors are
  // passed to the error handling middleware
  protected wrapAsync = (
    fn: (request: express.Request, response: express.Response, next: express.NextFunction) => any,
  ) => {
    return (request: express.Request, response: express.Response, next: express.NextFunction): void => {
      // Make sure to `.catch()` any errors and pass them along to the `next()`
      // middleware in the chain, in this case the error handler.
      fn(request, response, next).catch(next);
    };
  };
}

export default BaseController;
