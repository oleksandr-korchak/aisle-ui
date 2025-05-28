import { Routes } from '@angular/router'


export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../modules/home/aisle-home.routes').then((r) => r.routes),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',   
    },
]
