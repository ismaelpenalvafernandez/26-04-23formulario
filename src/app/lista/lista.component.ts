import { Component } from '@angular/core';
import { alumnos } from '../modelos/listaalumnos';
import { ServicioalumnosService } from '../servicio.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
alumno:alumnos ={id:0, dni:0, nombre:"", horas:0}
alumnos: alumnos[]=[]
dato : number=0

constructor(private servicioalumnos: ServicioalumnosService){

}
ngOnInit(): void{
  this.servicioalumnos.getalumnos().subscribe(data => {this.alumnos = data
  })
  }
}
