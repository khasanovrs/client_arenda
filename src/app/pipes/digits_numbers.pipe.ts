import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'digitsNumbers'
})
export class DigitsNumbersPipe implements PipeTransform {
  transform(value: string): string {
    value = String(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    return value;
  }
}
