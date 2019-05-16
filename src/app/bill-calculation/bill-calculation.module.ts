import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingBillComponent } from './pending-bill/pending-bill.component';
import { BillCalculationRoutingModule } from './bill-calculation-routing.module';

@NgModule({
  declarations: [PendingBillComponent],
  imports: [
    CommonModule,
    BillCalculationRoutingModule
  ]
})
export class BillCalculationModule { }
