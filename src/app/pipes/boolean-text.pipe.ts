import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanText'
})
export class BooleanTextPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): string {
    return value ? args[0] : args[1]
  }

}
