import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', redirectTo: 'splash', pathMatch:'full'},
  {
      path: '',
      component: HomeComponent,
      children: [
          {
              path: 'splash',
              loadChildren: () => import('./../splash-screen/splash-screen.module').then(m=>m.SplashScreenModule),
          },
          
          {
            path: 'allergies',
            loadChildren: () => import('./../allergy/list/allergy-list.module').then(m=>m.AllergyListModule),
          },
          {
            path: 'dangerous',
            loadChildren: () => import('./../dangerous/card/dangerous-card.module').then(m=>m.DangerousCardModule),
          }
          
        
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
