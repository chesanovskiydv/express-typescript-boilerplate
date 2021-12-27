import express from 'express';
import BaseController from './BaseController';

class HealthCheckController extends BaseController {
  constructor() {
    super();

    this.initRoutes();
  }

  protected initRoutes = (): void => {
    this.router.get('/healthcheck', this.checkHealth);
  };

  private checkHealth = (request: express.Request, response: express.Response): void => {
    response.send('OK');
  };
}

export default HealthCheckController;
