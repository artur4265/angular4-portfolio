import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(programs: any, term: any, groups: any): any {
    

    if (term === undefined) {
      return programs;
    } else {
      return programs.filter(function (app) {
        return app.name.toLowerCase().includes(term.toLowerCase());
      });
    }

  //   if (groups === undefined) {
  //     return programs;
  //   } 
  //   else {
  //    return programs.filter(function (app) {
  //      return app.category.toLowerCase().includes(groups.toLowerCase());
  //    });
  //  }


  }


}
