import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionScreenComponent } from './transaction-screen/transaction-screen.component';
import { TransactionServiceService } from './transaction-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransactionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
