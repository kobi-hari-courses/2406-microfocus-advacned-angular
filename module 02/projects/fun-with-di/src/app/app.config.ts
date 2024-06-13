import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AdditionService } from './services/addition.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    { provide: AdditionService, useClass: AdditionService}, 
  ], 

};
