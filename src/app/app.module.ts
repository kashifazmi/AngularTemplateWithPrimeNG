import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillCalculationModule } from './bill-calculation/bill-calculation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BillCalculationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
