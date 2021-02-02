import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todayDiff'
})
export class TodayDiffPipe implements PipeTransform {

  transform(value: number): number {
    return Math.floor(((value * 1000) - Date.now()) / (1000*60*60*24))
  }
}
