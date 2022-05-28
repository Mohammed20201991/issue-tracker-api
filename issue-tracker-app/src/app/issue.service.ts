import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Issue } from './issue';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',  //we  dont need
    //  we need accept header for add new issue
    'Accept': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issues : Issue []= [
    {id:1 , title:'issue1' , description: 'desc1',place :'place1', status : 'NEW' },
    {id:2 , title:'issue2' , description: 'desc2',place :'place2', status :'DOING'},
    {id:3 , title:'issue3' , description: 'desc3',place :'place3' , status :'DONE'},
    {id:4 , title:'issue4' , description: 'desc4',place :'place4' , status :'NEW' },
  ];

  private issuesUrl = 'http://localhost:8000/api/issues';
  constructor(
    private http: HttpClient
  ) { }

  async getIssues(){
   return await lastValueFrom( this.http.get<Issue[]>(this.issuesUrl));  //return all issues

    // return this.issues;
  }

  async getIssue(id: number) {
    return await lastValueFrom(this.http.get<Issue>('${this.issuesUrl}/${id}')); // return one issue
    // return await lastValueFrom(this.http.get<Issue>(`${this.issuesUrl}/${id}`));
    // return this.issues.find((issue) => issue.id === id);
  }

  async updateIssue(id: number,modifiedIssue:Issue){
    return await lastValueFrom(this.http.patch<Issue>('${this.issuesUrl}/${id}',modifiedIssue,httpOptions));

    // const issue = this.getIssue(id);
    // Object.assign(issue,modifiedIssue);
    // return issue;
  }

  async addIssue(newIssue : Issue){
    return await lastValueFrom(this.http.post<Issue>(this.issuesUrl,newIssue,httpOptions));   //(url,data we want to send ,options)

    // const id = this.issues.length+1;
    // newIssue.id = id;
    // this.issues.push(newIssue);
    // return newIssue;
  }

  // send delete request it will return no thing
  async deleteIssue(id:number){
    return await lastValueFrom(this.http.delete<null>('${this.issuesUrl}/${id}',httpOptions));

    // const pos = this.issues.findIndex((issue) => issue.id === id);
    // this.issues.splice(pos,1);//deleting
    // // this.issues= this.issues.filter((issue)=> issue.id !==id);
  }
}
