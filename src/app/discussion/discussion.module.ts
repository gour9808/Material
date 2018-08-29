import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {discussionsRoutes} from '../app.routes';
import { DiscussionComponent } from './discussion.component';

@NgModule({
    imports: [
        RouterModule.forChild(discussionsRoutes),
        CommonModule,
        
    ],
    exports: [RouterModule, DiscussionComponent],
    declarations: [ DiscussionComponent],
    providers: [],
})
export class DisscussionsModule {
}
