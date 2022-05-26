import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-issue-filter',
  templateUrl: './issue-filter.component.html',
  styleUrls: ['./issue-filter.component.css']
})
export class IssueFilterComponent implements OnInit {
  // public status="NEW"; // STEP1 default value
  @Input()status = 'DONE';
  // public status="DONE";
  @Output() statusChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  handleStatusChange(){
    this.statusChange.emit(this.status);
   }

}
