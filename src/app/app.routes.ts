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
import { OAuthGuard } from './services/oAuth-guard.service';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'load', pathMatch: 'full' },
    { path: 'auth', component: CallbackComponent },
    { path: 'load', component: DataLoaderComponent, canActivate : [OAuthGuard] },
    {
        path: 'home', component: ContainerComponent, children: [
            { path: '', redirectTo: 'my', pathMatch: 'full' },
            {
                path: 'my', component: DashboardComponent, children: [
                    { path: '', redirectTo: 'logs', pathMatch: 'full' },
                    { path: 'logs', component: MineComponent },
                    { path: 'allLogs', component: AllComponent },
                    { path: 'flag', component: SettingComponent }
                ]
            },
            { path: 'events', component: EventsComponent },
            { path: 'discussion', component: DiscussionComponent },
        ]
    },


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

