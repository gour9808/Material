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
    SettingComponent

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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
