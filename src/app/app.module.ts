import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { RouteModule } from "./route/route.module";
import { MenuComponent } from './menu/menu.component';
import { TransctionComponent } from './transction/transction.component';
import { TransctionHistoryComponent } from './transction-history/transction-history.component';
import { ISmartService } from "./i-smart.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MenuComponent, TransctionComponent, TransctionHistoryComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule, RouteModule,HttpClientModule],
  providers: [ISmartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
