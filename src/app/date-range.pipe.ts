import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

  transform(operations: any[], ...dates: Date[]): unknown {
    const dateFrom = dates[0];
    const dateTo = dates[1];
    return operations.filter(operation => {
      // logic to compare dateFrom and dateTo andthe operation.createdDate
    });
  }

}
