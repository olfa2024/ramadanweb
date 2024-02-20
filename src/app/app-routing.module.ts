import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { RegisterComponent } from './register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NidamComponent } from './nidam/nidam.component';
import { MawakitComponent } from './mawakit/mawakit.component';
import { WasfaComponent } from './wasfa/wasfa.component';
import { DoaaComponent } from './doaa/doaa.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealComponent } from './meal/meal.component';
import { DonComponent } from './don/don.component';
import { HikamComponent } from './hikam/hikam.component';

const routes: Routes = [
     {path: '', component:  AccueilComponent ,pathMatch:'full'},
  {path: 'accueil', component:AccueilComponent},
  {path: 'inscription', component:InscriptionComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'nidam', component:NidamComponent},
  {path: 'mawakit', component:MawakitComponent},
   {path: 'wasfa', component:WasfaComponent},
   {path: 'doaa', component: DoaaComponent},
   {path: 'meal-list', component: MealListComponent},
    {path: 'meal', component: MealComponent},
     {path: 'hikam', component:  HikamComponent},
   
 
     {path: 'don', component:    DonComponent},
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
