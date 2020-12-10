import { Pipe, PipeTransform } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';

@Pipe({
  name: 'filterTopic'
})
  
export class FilterTopicPipe implements PipeTransform {
  transform(stickyNotes: StickyNote[], topic: string): StickyNote[] {
    if (topic === undefined || topic === "") return stickyNotes;
    return stickyNotes.filter(stickyNote => stickyNote.topic.startsWith(topic));
  }
}
