import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  order: string;
  orderstatus:string;
  customer:string;
  daytime:string;
  view:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {order:'5',orderstatus:'Complete',customer:'Victoria Terces (victoria_victoria@nopCommerce.com)',daytime:'03/13/3017 6:20:10 AM',view:'View'},
  {order:'4',orderstatus:'Processing',customer:'Brenda Lindgren (brenda_lindgren@nopCommerce.com)',daytime:'03/13/3017 6:20:09 AM',view:'View'},
  {order:'3',orderstatus:'Pending',customer:'James Pan (james_pan@nopCommerce.com)',daytime:'03/13/3017 6:20:09 AM',view:'View'},
  {order:'2',orderstatus:'Pending',customer:'Arthur Holmes (arthur_holmes@nopCommerce.com)',daytime:'03/13/3017 6:20:09 AM',view:'View'},
  {order:'1',orderstatus:'Processing',customer:'Steve Gates (steve_gates@nopCommerce.com)',daytime:'03/13/3017 6:20:09 AM',view:'View'},
  
  
];
@Component({
  selector: 'app-lastorder',
  templateUrl: './lastorder.component.html',
  styleUrls: ['./lastorder.component.css']
})
export class LastorderComponent implements OnInit {
  constructor() { }
  displayedColumns: string[] = ['order','orderstatus','customer','daytime','view'];
  dataSource = ELEMENT_DATA;
 /* getStatustext(stauts:any) {
    if(stauts === 'Complete'){
      return 'green';
    }if(status === 'Processing') {
      return 'sky';
    }
    if (status === 'Pending'){
      return 'yellow';
    }
  }*/
  num =this.dataSource.length;

  ngOnInit(): void{ }
}
