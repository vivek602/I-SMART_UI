import { Component, OnInit, Input, OnChanges } from "@angular/core";

import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ISmartService } from "../i-smart.service";

@Component({
  selector: "app-transction",
  templateUrl: "./transction.component.html",
  styleUrls: ["./transction.component.css"]
})
export class TransctionComponent implements OnInit {
  constructor(private fb: FormBuilder, private ser: ISmartService) {
    this.saveTransaction();
  }
  transactioForm: FormGroup;
  selectedStatusId;

  ngOnInit() {
    this.loadCust();
    this.loadCategory();
  }

  saveTransaction() {
    this.transactioForm = this.fb.group({
      customerId: "",
      customerName: "",
      availAmt: "",
      tranDate: "",
      tranAmt: "",
      transDesc: "",
      pamentType: "",
      spendCategoryId: ""
    });
  }

  onSubmit() {
    console.log(this.transactioForm.value);
    let obj = {
      amount: this.transactioForm.controls['tranAmt'].value,
      customerId:parseInt(this.transactioForm.controls['customerId'].value),
      date: "2019-03-17T10:28:13.817Z",
      paymentType: this.transactioForm.controls['pamentType'].value,
      spendCategoryId: parseInt(this.transactioForm.controls['spendCategoryId'].value),
      transactionDescription: this.transactioForm.controls['transDesc'].value,
    };
    console.log(JSON.stringify(obj));
    this.transact(obj);

  }

  response
  transact(param){
    this.ser.doTransact(param).subscribe(data =>{
      this.response =data
    alert(`Transaction ${data.message}`)
    });

  }


  allCustomer = [];
  spendingCategory = [];
  loadCust() {
    this.ser.getCustData().subscribe(data => (this.allCustomer = data.data));
  }
  loadCategory() {
    this.ser
      .getCategory()
      .subscribe(data => (this.spendingCategory = data.data));
  }
}
