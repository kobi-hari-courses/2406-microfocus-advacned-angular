import { Routes } from '@angular/router';
import { BLANK } from './tokens/blank.token';
import { ENVIRONMENT_INITIALIZER } from '@angular/core';

export const routes: Routes = [
    {
        path: '', redirectTo: 'page-a', pathMatch: 'full'
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
