import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstruccionesComponent } from './pages/instrucciones/instrucciones.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'instrucciones',
    pathMatch: 'full',
  },
  {
    path: "instrucciones",
    component: InstruccionesComponent
  },
  {
    path: "personajes",
    component: PersonajesComponent
  },
  {
    path: "**",
    redirectTo: "instrucciones",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  InstruccionesComponent,
  PersonajesComponent
]