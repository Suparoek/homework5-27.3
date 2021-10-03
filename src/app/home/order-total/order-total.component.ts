import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  orderstatus: string;
  today: string;
  thisweek:string;
  thismonth: string;
  thisyear:string;
  alltime:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {orderstatus:'pending', today: '$0.00', thisweek:'$0.00', thismonth: '$0.00',thisyear:'$0.00',alltime:'2,468.80'},
  {orderstatus:'Processing', today: '$0.00', thisweek:'$0.00', thismonth: '$0.00',thisyear:'$0.00',alltime:'1,957.00'},
  {orderstatus:'Complete', today: '$0.00', thisweek:'$0.00', thismonth: '$0.00',thisyear:'$0.00',alltime:'43.50'},
  {orderstatus:'Cancelled', today: '$0.00', thisweek:'$0.00', thismonth: '$0.00',thisyear:'$0.00',alltime:'0.00'},
];

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.css']
})
export class OrderTotalComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['orderstatus', 'today', 'thisweek', 'thismonth','thisyear','alltime'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
