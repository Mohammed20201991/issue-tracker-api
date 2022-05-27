import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
                          {
                            path: '',
                            // redirectTo: "/issues",
                            // pathMatch: "full",
                          component: MainPageComponent,
                          },
                          {
                            path: "issues",
                            component: IssueListComponent,
                          },
                          {
                            path: "issues/new",
                            component: IssueEditComponent,
                          },
                          {
                            path: "issues/:id",
                            component: IssueDetailComponent,
                          },
                          // {
                          //   path: "issues/:id/edit",
                          //   component: IssueFormComponent,
                          // },
                          {
                            path: "issues/:id/edit",
                            component: IssueEditComponent,
                          },
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
