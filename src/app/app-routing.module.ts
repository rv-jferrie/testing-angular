import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReposComponent } from './pages/repos/repos.component';
import { StaticComponent } from './pages/static/static.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'repos', component: ReposComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'static', component: StaticComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
