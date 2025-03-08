import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './modules/general/components/flights/flights.component';

const routes: Routes = [
  { path: '', redirectTo: 'flights', pathMatch: 'full' }, // Redirect default to flights
  { path: 'flights', component: FlightsComponent }, // Flights route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
