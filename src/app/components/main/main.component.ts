import { Component } from '@angular/core';
import { alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  alumnos: alumno[] = [
    { nombre: "Agustin", apellido: "Toponi", email: "atoponi@gmail.com", estado: true },
    { nombre: "Nicolas", apellido: "Lopez", email: "nlopez@gmail.com", estado: true },
    { nombre: "Andres", apellido: "Orellana", email: "aorellana@gmail.com", estado: false },
    { nombre: "Julian", apellido: "Corbera", email: "jcorbera@gmail.com", estado: false }
  ];

  agregarAlumno(alumno: alumno){
    console.log(alumno)
    this.alumnos.push(alumno)
    console.log(this.alumnos)
  }

  editarAlumno(alumnos: alumno){
    console.log(alumnos)
  }
}
