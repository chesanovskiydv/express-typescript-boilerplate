import { App } from './app';
import * as Controllers from '@app/controllers';

const controllers = [new Controllers.HealthCheckController()];

new App(controllers).bootstrap();
