import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Por default, redirigir al dashboard
  { path: '404', redirectTo: 'dashboard', pathMatch: 'full' }, // En caso de error 404, redirigir al dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ingresos', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
