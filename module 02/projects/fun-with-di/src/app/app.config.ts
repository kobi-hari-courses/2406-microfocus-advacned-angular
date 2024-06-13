import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { PREFIX } from './tokens/prefix.token';
import { TIMESTAMP } from './tokens/timestamp.token';
import { InitService } from './services/init.service';
import { provideHttpClient } from '@angular/common/http';
import { BLANK } from './tokens/blank.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: AdditionService, useExisting: WrongAdditionService },
    { provide: PREFIX, useValue: 'INFO' },
    { provide: TIMESTAMP, useValue: () => new Date().toTimeString() },
    {
      provide: APP_INITIALIZER,
      useFactory: (initService: InitService) => () => initService.init(),
      deps: [InitService],
      multi: true,
    },
    { provide: BLANK, useValue: 1000 },
  ],
};
