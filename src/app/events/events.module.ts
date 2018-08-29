import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {eventRoutes} from '../app.routes';
import { EventsComponent } from './events.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RouterModule.forChild(eventRoutes),
        CommonModule, CommonModule, FormsModule,
    ],
    exports: [RouterModule, EventsComponent],
    declarations: [ EventsComponent],
    providers: [],
})
export class EventsModule {
}
