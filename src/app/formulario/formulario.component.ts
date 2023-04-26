import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ServicioalumnosService } from '../servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { alumnos } from '../modelos/listaalumnos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
alumnoformulario : FormGroup = new FormGroup({
  id : new FormControl(0),
  dni : new FormControl(0),
  nombre : new FormControl(0),
  horas : new FormControl(0)
})
alumno : alumnos={
  id: 0,
  dni: 0,
  nombre: '',
  horas: 0
}

constructor(private servicioalumno : ServicioalumnosService,
  private activarrutas : ActivatedRoute,
  private rutes : Router){

  }
  ngOnInit(): void{
    this.activarrutas.queryParams.subscribe(data => {
      this.servicioalumno.addbuscar(data["dato"]).subscribe(alum =>{
        this.alumno=alum
        this.alumnoformulario=new FormGroup({
        id: new FormControl(this.alumno.id),
        dni: new FormControl(this.alumno.dni),
        nombre: new FormControl(this.alumno.nombre),
        horas: new FormControl(this.alumno.horas),
        })
    })
  })
}

anadir(){
  this.servicioalumno.addAlumnos(this.alumno);
  this.rutes.navigate([''])
}
addmodificar() {
  this.alumno.dni=this.alumnoformulario.value.dni
  this.alumno.nombre=this.alumnoformulario.value.nombre
  this.alumno.horas=this.alumnoformulario.value.horas
  if(this.alumno.id==0){
    this.alumno.id=this.servicioalumno.misalumnos[this.servicioalumno.misalumnos.length-1].id+1;
    this.anadir();
  }
  else{
    this.servicioalumno.modificarAl(this.alumno)
  }
}
}
