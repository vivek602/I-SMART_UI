import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransctionComponent } from '../transction/transction.component';
import { TransctionHistoryComponent } from '../transction-history/transction-history.component';

const routes: Routes = [
  {path: '', redirectTo: 'transaction', pathMatch:'full'},
  {path: 'transaction', component:TransctionComponent},
  {path: 'transaction-history', component:TransctionHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
