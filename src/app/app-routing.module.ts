import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoggedInGuard } from './user/logged-in.guard';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, /*canActivate: [LoggedInGuard]*/
  },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule)
    , /* canActivate: [LoggedInGuard] */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
