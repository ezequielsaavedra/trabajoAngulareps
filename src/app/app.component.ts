import { Component } from '@angular/core';
import { alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajo-angular';
  alumnos: alumno[] = [
    { nombre: "Agustin", apellido: "Toponi", email: "atoponi@gmail.com", estado: true, id: 1 },
    { nombre: "Nicolas", apellido: "Lopez", email: "nlopez@gmail.com", estado: true, id: 2 },
    { nombre: "Andres", apellido: "Orellana", email: "aorellana@gmail.com", estado: false, id: 3 },
    { nombre: "Julian", apellido: "Corbera", email: "jcorbera@gmail.com", estado: false, id: 4 }
  ];

  agregarAlumno(alumno: alumno){
    this.alumnos.push(alumno)
  }

  editarAlumno(alum: alumno){
    this.alumnos = this.alumnos.filter((value) => {
      if(value.id === alum.id){
        value.nombre = alum.nombre
        value.apellido = alum.apellido
        value.email = alum.email
        value.estado = alum.estado
      }
      return true
    })
  }
}
