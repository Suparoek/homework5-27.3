import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  total:number;
  amount:string;
  view:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
   {name:'Apple icam',total:1,amount:'$1,300',view:'View'},
  {name:'levl 511 Jeans',total:1, amount:'$43.50',view:'View'},
  {name:'Night Visions',total:1,amount:'$2.80',view:'View'},
  {name:'IF You Wait(denation)',total:1,amount:'$3.00',view:'View'},
  {name:'Science & Faith',total:1,amount:'$3.00',view:'View'},
  {name:'Sicence & Faith',total:1,amount:'$3.00',view:'View'},
  {name:'Fahernheit 451 by Bradbury',total:1,amount:'$51.00',view:'View'},
  {name:'First Prize Pies',total:1,amount:'$24.00',view:'View'},
  {name:'Pride and Prejudice',total:1,amount:'$24.00',view:'View'},
  {name:'Flower Girl Bracelet',total:1,amount:'$360',view:'View'},
  {name:'Vintage Style Engagement Ring',total:1,amount:'$2,100',view:'View'},
  {name:'$25 Virtual Gift Card',total:1, amount:'$25.00',view:'View'}


];

@Component({
  selector: 'app-bestquantity',
  templateUrl: './bestquantity.component.html',
  styleUrls: ['./bestquantity.component.css']
})
export class BestquantityComponent implements OnInit {
  startIndex=0;
  endIndex = 5;
  constructor() { }
  displayedColumns: string[] = ['name','total','amount','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator!:MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
