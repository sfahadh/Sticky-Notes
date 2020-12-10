import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTopic'
})
export class FilterTopicPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
