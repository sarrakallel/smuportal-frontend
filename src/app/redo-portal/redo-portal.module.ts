import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  RedoPortalComponent  } from './redo-portal.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: 'redo',
        component: RedoPortalComponent
    },
];

@NgModule({
    declarations: [
        RedoPortalComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        FontAwesomeModule
    ],
    exports: [
        RouterModule
    ]
})
export class RedoPortalModule { }
