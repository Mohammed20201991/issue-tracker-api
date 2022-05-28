import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  // start with empty list
  public issues : Issue []= [

                            ];
 public status="ALL"; // STEP1 default value
 public filteredIssues:Issue[]= [];
 public selectedIssue:Issue | null= null;
  constructor(private issueService : IssueService) { }

//  we can delete void type here because typescript know what it return
// every async function return Promise
  async ngOnInit(){
    this.issues = await this.issueService.getIssues();
    this.filterIssue();
  }

 private filterIssue(){
  this.filteredIssues =
  this.status==='ALL'? this.issues
  :this.issues.filter((issue)=> issue.status=== this.status);
 }

  handleStatusChange(newStatus: string){
    console.log(newStatus);
    this.status = newStatus;
    this.filterIssue();
   }

   handleSave(issue : Issue){
    //  console.log(issue);
Object.assign(this.selectedIssue,issue);
this.selectedIssue = null;
   }
}
