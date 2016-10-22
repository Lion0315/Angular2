import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

import { routing } from './app-routing.module';
import { Angular2DataTableModule } from 'angular2-data-table';
import { DatatableComponent } from './datatable/datatable.component';
import { FunctionbarComponent } from './functionbar/functionbar.component';

import { HeroService } from './service/hero.service';
import { LoginService } from './service/login.service';
import { Test2Component } from './test2/test2.component';
import { PiechartComponent } from './piechart/piechart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TestComponent,
    DatatableComponent,
    FunctionbarComponent,
    Test2Component,
    PiechartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Angular2DataTableModule
  ],
  providers: [HeroService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
