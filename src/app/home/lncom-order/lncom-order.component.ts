import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  item: string;
  total:string;
  count:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80',count:'2-view all'},
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80', count:'2-view all'},
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80', count:'2-view all'},
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80', count:'2-view all'},
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80', count:'2-view all'},
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80', count:'2-view all'},
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80', count:'2-view all'},
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80', count:'2-view all'},
  {item: 'Total unpaid orders (pending payment status)',total:'$2,468.80', count:'2-view all'},
  
];

@Component({
  selector: 'app-lncom-order',
  templateUrl: './lncom-order.component.html',
  styleUrls: ['./lncom-order.component.css']
})
export class LncomOrderComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['item','total','count'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
