import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreAlumnos'
})
export class NombreAlumnosPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return `${args[0]} ${args[1]}`;
  }

}
