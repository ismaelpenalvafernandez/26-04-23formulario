import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
const routes: Routes = [
  {path: '',component:ListaComponent,children: [
    { path: 'listar', component: ListaComponent },
    { path: 'formulario/:dato', component: FormularioComponent },
    ],
    },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
