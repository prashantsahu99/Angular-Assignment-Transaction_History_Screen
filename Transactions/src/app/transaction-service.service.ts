import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor() { }

  getUserDetails(){
    return{
      "username" :"Admin",
      "password":"Admin@123",
      "mobile_no":"63478 10859"
    }
  }

  getAllTranscation(){
    return [
      {
        "transcationType":"pay",
        "transactionDirect":"sent",
        "amount":"3000",
        "date":new Date("2022-10-07"),
        "transcationId":"AI39856329105619"
      },
      {
        "transcationType":"pay",
        "transactionDirect":"collect",
        "amount":"1000",
        "date":new Date("2022-11-18"),
        "transcationId":"AI39856329105660"
      },
      {
        "transcationType":"received",
        "transactionDirect":"collect",
        "amount":"2000",
        "date":new Date("2022-11-19"),
        "transcationId":"AI39856329105679"
      },
      {
        "transcationType":"received",
        "transactionDirect":"sent",
        "amount":"500",
        "date":new Date("2022-11-19"),
        "transcationId":"AI39856329105721"
      }
    ]
  }
}
