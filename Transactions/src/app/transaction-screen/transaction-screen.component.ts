import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-transaction-screen',
  templateUrl: './transaction-screen.component.html',
  styleUrls: ['./transaction-screen.component.css']
})
export class TransactionScreenComponent implements OnInit {

  transaction :any=[];
  details:any={};


  constructor(private transactionservice : TransactionServiceService) {
    this.transaction = this.transactionservice.getAllTranscation();
    this.transaction.sort((a: any, b: any) => (a.date <b.date ? -1: 1));
    this.details=this.transactionservice.getUserDetails();
   }

  ngOnInit(): void {
  }

}
