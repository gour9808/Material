import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {dashboardRoutes} from '../app.routes';
import { DashboardComponent } from './dashboard.component';
import { TabbarComponent } from '../layout/tabbar/tabbar.component';


@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes),
        CommonModule,
       
    ],
    exports: [RouterModule, DashboardComponent, TabbarComponent],
    declarations: [ DashboardComponent, TabbarComponent],
    providers: [],
})
export class HomeModule {
}
