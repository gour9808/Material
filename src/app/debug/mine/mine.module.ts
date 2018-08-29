import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { MineComponent } from './mine.component';
import { AllComponent } from '../all/all.component';
import { SettingComponent } from '../setting/setting.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { MineRoutes } from '../../app.routes';



@NgModule({
    imports: [
        RouterModule.forChild(MineRoutes),
        CommonModule, FormsModule,
    ],
    exports: [RouterModule, MineComponent, SettingComponent, AllComponent],
    declarations: [ AllComponent, MineComponent, SettingComponent, ],
    providers: [],
})
export class MineModule {
}
