import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ShoppingComponent } from './components/public/shopping/container/shopping.component';
import { ShoppingListComponent } from './components/public/shopping/components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/public/shopping/components/shopping-edit/shopping-edit.component';
import { RecipeComponent } from './components/public/recipe/container/recipe.component';
import { RecipeListComponent } from './components/public/recipe/components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/public/recipe/components/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/public/recipe/components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
