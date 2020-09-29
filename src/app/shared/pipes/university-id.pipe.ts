import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universityID'
})
export class UniversityIdPipe implements PipeTransform {
  formattedId: string;
  transform(id: number): any {
    if (!id) {
      return;
    }
    this.formattedId = id.toString().replace(/(\d{2})(\d{1})(\d{4})/, '$1-$2-$3');
    return this.formattedId;
  }
}
