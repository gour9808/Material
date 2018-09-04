import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import { DataLoaderComponent } from './data-loader/data-loader.component';
import { AppRoutingModule } from './app.routes';
import { AllComponent } from './debug/all/all.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabbarComponent } from './layout/tabbar/tabbar.component';
import { MineComponent } from './debug/mine/mine.component';
import { CallbackComponent } from './callback/callback.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { EventsComponent } from './events/events.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { SettingComponent } from './debug/setting/setting.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { OAuthGuard } from './services/oAuth-guard.service';
import { MineLogsService } from './services/mine-logs.service';
import { HttpInterceptorService } from './interceptor/http.interceptor.service';
import { MatMenuModule } from '@angular/material/menu';
import { TimeAgoPipe } from 'time-ago-pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MatSelectModule} from '@angular/material/select';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {  AutoCompleteModule, CheckboxModule } from 'primeng/primeng';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SchemaBuilderComponent } from './schema-builder/schema-builder.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {AccordionModule} from 'primeng/accordion';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerComponent,
    DataLoaderComponent,
    AllComponent,
    DashboardComponent,
    TabbarComponent,
    MineComponent,
    CallbackComponent,
    EventsComponent,
    DiscussionComponent,
    SettingComponent,
    TimeAgoPipe,
    SchemaBuilderComponent,

  ],
  imports: [
    BrowserModule,
    MatTableModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    MatMenuModule,
    MatDialogModule,
    ConfirmDialogModule,
    MatSelectModule,
    DialogModule,
    ButtonModule,
    AutoCompleteModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatCardModule,
    AccordionModule,
    MatCheckboxModule
    

  ],


  providers: [AuthService, OAuthGuard, MineLogsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    ConfirmationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
