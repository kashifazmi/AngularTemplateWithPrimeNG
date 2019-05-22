import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillCalculationModule } from './bill-calculation/bill-calculation.module';

const routes: Routes = [{
  path: '',
  loadChildren: () => BillCalculationModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
