import { Routes } from '@angular/router';
import { ExtraOptions, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { EventsComponent } from './events/events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { MineComponent } from './debug/mine/mine.component';
import { SettingComponent } from './debug/setting/setting.component';
import { AllComponent } from './debug/all/all.component';
import { DataLoaderComponent } from './data-loader/data-loader.component';
import { CallbackComponent } from './callback/callback.component';

export const eventRoutes: Routes = [
    { path: 'all', component: EventsComponent },
]

export const discussionsRoutes: Routes = [
    { path: 'all', component: DiscussionComponent }
]

export const MineRoutes: Routes = [

    { path: "", redirectTo: "logs" },
    { path: "logs", component: MineComponent },
    { path: "allLogs", component: AllComponent },
    { path: "flag", component: SettingComponent },
]

export const dashboardRoutes: Routes = [
    { path: '', redirectTo: 'my' },
    { path: 'my', component: DashboardComponent, loadChildren: "./debug/mine/mine.module#MineModule" },
    { path: 'events', loadChildren: './events/events.module#EventsModule' },
    { path: 'discussions', loadChildren: './discussions/discussion.module#DisscussionsModule' },

];

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'auth/callback', component: CallbackComponent },
    { path: 'load', component: DataLoaderComponent},
    { path: 'home', component: ContainerComponent, loadChildren: './dashboard/home.module#HomeModule' }

];

export const routingConfiguration: ExtraOptions = {
    paramsInheritanceStrategy: 'always'
};

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, routingConfiguration)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

