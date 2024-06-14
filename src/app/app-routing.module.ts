import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { ReservanosComponent } from './components/reservanos/reservanos.component';
const routes: Routes = [
  {
    path : '',
    redirectTo : '/reservaciones' ,
    pathMatch : 'full'
  },
  {
    path : 'reservaciones',
    component :  ReservacionesComponent
  },
  {
    path : 'contratos',
    component :  ContratoComponent
    
  },
  {
    path : 'reservanos',
    component :  ReservanosComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
