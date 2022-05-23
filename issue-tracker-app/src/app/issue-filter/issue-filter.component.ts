import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-filter',
  templateUrl: './issue-filter.component.html',
  styleUrls: ['./issue-filter.component.css']
})
export class IssueFilterComponent implements OnInit {
  // public status="NEW"; // STEP1 default value
  @Input()status = 'DONE';
  constructor() { }

  ngOnInit(): void {
  }


  handleStatusChange(){

   }

}
