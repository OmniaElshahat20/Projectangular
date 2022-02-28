import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var array:any[]=[];
    args.forEach(k=>{
         if(k===value){
          array.push(k);
         }
    });

    return array;

  }

}
