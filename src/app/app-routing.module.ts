import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ShoppingComponent } from './components/public/shopping/container/shopping.component';
import { RecipeComponent } from './components/public/recipe/container/recipe.component';
import { RecipeDetailsComponent } from './components/public/recipe/components/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'recipe-details', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
