import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'test/:section/:username',
    component:QuestionComponent
  },
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
