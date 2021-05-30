import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SplashScreenComponent } from "./splash-screen.component";

const routes: Routes = [{
    path:'',
    component: SplashScreenComponent,
    data: {title: 'Főoldal- Allergia'}
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class SplashScreenRoutingModule{}