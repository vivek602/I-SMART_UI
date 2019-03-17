import { Component, OnInit } from '@angular/core';
import { ISmartService } from '../i-smart.service';
import { FormBuilder } from '@angular/forms';
import { FormArray, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-transction-history',
  templateUrl: './transction-history.component.html',
  styleUrls: ['./transction-history.component.css']
})
export class TransctionHistoryComponent implements OnInit {

  constructor(private fb: FormBuilder, private ser: ISmartService) {
    this.searchCriteria();
  }

  public months =  [
    {"monthNm":"JAN","monthId":"1"},
    {"monthNm":"FEB","monthId":"2"},
    {"monthNm":"MAR","monthId":"3"},
    {"monthNm":"APR","monthId":"4"},
    {"monthNm":"MAY","monthId":"5"},
    {"monthNm":"JUN","monthId":"6"},
    {"monthNm":"JULY","monthId":"7"},
    {"monthNm":"AUG","monthId":"8"},
    {"monthNm":"SEP","monthId":"9"},
    {"monthNm":"OCT","monthId":"10"},
    {"monthNm":"NOV","monthId":"11"},
    {"monthNm":"DEC","monthId":"12"},
  ]

  searchForm: FormGroup;
  ngOnInit() {
    this.loadCategory();
    this.allTrans();
  }
  spendingCategory=[]

  searchCriteria(){
    this.searchForm = this.fb.group({
      spendCategoryId:'',
      category:''
    });
  }

  loadCategory() {
    this.ser.getCategory().subscribe(data => this.spendingCategory = data.data);
  }

allTransactions=[]
  allTrans(){
    this.ser.getAllTransaction().subscribe(data => this.allTransactions = data.data);
  }
  showMonth:boolean=false;
  showPeriodic:boolean=false;



  selected(val){
   if(val === 'Monthly'){
    this.showMonth = true;
    this.showPeriodic = false;
   }else if(val === 'Periodicaly'){
    this.showMonth = false;
    this.showPeriodic = true;
   }else{
    this.showMonth = false;
    this.showPeriodic = false;
   }
  }
}
