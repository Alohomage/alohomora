import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string): string {

    value = value.toLowerCase();

    let nombres = value.split(" ");

      let count = 0;
    for(let i in nombres) {
        if(count <= nombres[i].length) {
          nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1) + ', ';
        } else {
          nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
        }
        count++;
      }



    return nombres.join(" ");
  }

}
