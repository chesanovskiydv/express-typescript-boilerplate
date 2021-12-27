import express from 'express';
import cors from 'cors';
import Server from './Server';
import BaseController from '@app/controllers/BaseController';

class App extends Server {
  constructor(private controllers: BaseController[]) {
    super();

    this.configure();
  }

  private configure = (): void => {
    this.initializeMiddlewares();
    this.initializeControllers();
    this.initializeErrorHandler();
  };

  private initializeMiddlewares = (): void => {
    this.expressApp.use(cors());
  };

  /**
   * Register controllers.
   */
  private initializeControllers = (): void => {
    this.controllers.forEach((controller: BaseController) => {
      this.expressApp.use('/', controller.router);
    });
  };

  /**
   * Register error handler middleware.
   * Make sure that this middleware is the last in the chain.
   */
  private initializeErrorHandler = (): void => {
    this.expressApp.use(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (err: any, request: express.Request, response: express.Response, next: express.NextFunction): void => {
        response.status(500).end();
      },
    );
  };
}

export default App;
