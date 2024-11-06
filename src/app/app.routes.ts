import { Routes } from '@angular/router';
import { LoginComponent } from './componets/layout/login/login.component';
import { PrincipalComponent } from './componets/layout/principal/principal.component';
import { CarrosdetailsComponent } from './componets/carros/carrosdetails/carrosdetails.component';
import { CarroslistComponent } from './componets/carros/carroslist/carroslist.component';
import { MarcasdetailsComponent } from './componets/marcas/marcasdetails/marcasdetails.component';
import { MarcaslistComponent } from './componets/marcas/marcaslist/marcaslist.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "admin", component: PrincipalComponent, children: [
        { path: "carros", component: CarroslistComponent},
        { path: "carros/new", component: CarrosdetailsComponent },
        { path: "carros/edit/:id", component: CarrosdetailsComponent },
        { path: "marcas", component: MarcaslistComponent },
        { path: "marcas/new", component: MarcasdetailsComponent },
        { path: "marcas/edit/:id", component: MarcasdetailsComponent }
    ]}
];
