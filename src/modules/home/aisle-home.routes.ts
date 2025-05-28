import { Routes } from '@angular/router'

import { AisleHomePageComponent } from './pages'


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AisleHomePageComponent,
    },
]
