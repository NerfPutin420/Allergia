import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DangerousCardComponent } from "./dangerous-card.component";

const routes: Routes = [{
    path:'',
    component: DangerousCardComponent,
    data: {title: 'Főoldal- Vezsélyes'}
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AllergyListRoutingModule{}