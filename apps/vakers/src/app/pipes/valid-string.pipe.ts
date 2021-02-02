import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validString'
})
export class ValidStringPipe implements PipeTransform {

  transform(value: string): boolean {
    return (value !== null) && (value !== '')
  }

}
