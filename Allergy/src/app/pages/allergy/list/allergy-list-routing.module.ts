import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllergyListComponent } from "./allergy-list.component";

const routes: Routes = [{
    path:'',
    component: AllergyListComponent,
    data: {title: 'Főoldal- Allergia'}
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AllergyListRoutingModule{}