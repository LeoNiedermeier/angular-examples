import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase'
})
export class ToUpperCasePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return value;
    }
    if (typeof value !== 'string') {
      throw new Error('Not a string');
    }
    return value.toUpperCase();
  }
}
