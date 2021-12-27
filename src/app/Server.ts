import express from 'express';
import http from 'http';
import config from '../config';

class Server {
  public expressApp: express.Application = express();
  public httpServer: http.Server = http.createServer(this.expressApp);

  public bootstrap(): this {
    const port = parseInt(config.PORT, 10);

    this.httpServer.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });

    return this;
  }

  public close(callback?: (err?: Error) => void): this {
    this.httpServer.close(callback);

    return this;
  }
}

export default Server;
