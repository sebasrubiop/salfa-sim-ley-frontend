import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstruccionesComponent } from './pages/instrucciones/instrucciones.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: "home",
    component: HomeComponent
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
  PersonajesComponent,
  HomeComponent,
]