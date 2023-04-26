import { Injectable } from '@angular/core';
import { alumnos } from './modelos/listaalumnos';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ServicioalumnosService {
  misalumnos:alumnos[]=[
     {id:1, dni:111111, nombre:"Manuel", horas:5},
     {id:2, dni:222222, nombre:"Alberto", horas:10},
     {id:3, dni:333333, nombre:"Ruben", horas:15},
     {id:4, dni:444444, nombre:"Manuel", horas:20}
  ]
  constructor(){}
  addAlumnos(curso: alumnos) {
   this.misalumnos.push(curso);
  }
  getcursoyid(dato : number){
   return this.misalumnos.find(curso => curso.id==dato)
   }
  getalumnos():Observable<alumnos[]>{
    return of(this.misalumnos)
  }
   addmodificar( nuevoalumno:alumnos){
     let dato=this.misalumnos.find((misalumnos)=>misalumnos.id==nuevoalumno.id)
     if(dato!=undefined){
       this.misalumnos[dato.id-1]
   }
 }
 modificarAl(alumno: alumnos){
  let dato = this.misalumnos.findIndex((mialumno)=>mialumno.id==alumno.id)
  if(dato!=-1){
    this.misalumnos[dato]=alumno;
  }
 }
 addbuscar(id:number):Observable<alumnos>{
  let dato = this.misalumnos.find((misalumnos) =>misalumnos.id==id);
  if(dato!=undefined){
    return of(dato)
  }
  else{
    return of({id:0, dni:0, nombre:"", horas:0})
  }
 }
 }
