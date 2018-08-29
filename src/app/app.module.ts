import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import { CallbackComponent } from './callback/callback.component';
import { DataLoaderComponent } from './data-loader/data-loader.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContainerComponent,
    CallbackComponent,
    DataLoaderComponent,
  ],
  imports: [
    BrowserModule, MatTableModule, NoopAnimationsModule, BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
