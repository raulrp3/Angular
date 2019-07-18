import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mName'
})
export class MPipePipe implements PipeTransform {

  transform(name: string, lastname: string): any {
    return lastname + ", " + name;
  }

}
