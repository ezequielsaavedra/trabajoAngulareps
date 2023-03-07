import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombres'
})
export class NombresPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (args[1]) {
      return `${args[0]} ${args[1]}`.toLocaleUpperCase();
    } else {
      return  `${args[0]}`.toLocaleUpperCase();
    }
  }

}
