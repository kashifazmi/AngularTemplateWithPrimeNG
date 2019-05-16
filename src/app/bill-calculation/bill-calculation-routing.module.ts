import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PendingBillComponent } from './pending-bill/pending-bill.component';

const routes: Routes = [{
  path: '',
  component: PendingBillComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BillCalculationRoutingModule { }
