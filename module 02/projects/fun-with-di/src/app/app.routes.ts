import { Routes } from '@angular/router';
import { BLANK } from './tokens/blank.token';
import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { AdditionService } from './services/addition.service';

export const routes: Routes = [
    {
        path: '', redirectTo: 'page-a', pathMatch: 'full', canActivate: [() => inject(AdditionService).add(2, 2) === 4]
    }, 
    { 
        path: 'page-a', loadComponent: () => import('./pages/page-a/page-a.component')
    }, 
    { 
        path: 'page-b', loadComponent: () => import('./pages/page-b/page-b.component'), 
        providers: [
            {provide: BLANK, useValue: 2000}, 
        ],
        children: [
            {
                path: 'c1', loadComponent: () => import('./pages/page-bchild-1/page-bchild-1.component'), 
                providers: [{provide: BLANK, useValue: 3000}],
                
            }, 
            {
                path: 'c2', loadComponent: () => import('./pages/page-bchild-2/page-bchild-2.component')
            }

        ]
    }


];
