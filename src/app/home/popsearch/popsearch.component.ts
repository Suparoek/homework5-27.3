import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  keyword: string;
  count:number;
}
const ELEMENT_DATA: PeriodicElement[] = [
   {keyword:'computer',count:34},
   {keyword:'camera',count:30},
   {keyword:'jewelry',count:27},
   {keyword:'shoes',count:26},
   {keyword:'jeans',count:19},
   {keyword:'gift',count:10},
];
@Component({
  selector: 'app-popsearch',
  templateUrl: './popsearch.component.html',
  styleUrls: ['./popsearch.component.css']
})
export class PopsearchComponent implements OnInit {
  startIndex=0;
  endIndex = 5;

  
  constructor() { }
  displayedColumns: string[] = ['keyword','count'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator!:MatPaginator;


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }


}
