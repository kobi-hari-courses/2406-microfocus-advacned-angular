import { InjectionToken } from "@angular/core";

export const TIMESTAMP = new InjectionToken<() => string>('TIMESTAMP');