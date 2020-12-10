import { Pipe, PipeTransform } from '@angular/core';
import { StickyNote } from 'src/app/model/sticky-note';
import { getColor } from '../../functions/getColor';

@Pipe({
  name: 'filterColor'
})
  
export class FilterColorPipe implements PipeTransform {

  transform(stickyNotes: StickyNote[], color: string): StickyNote[] {
    if (color === undefined || color === "") return stickyNotes;
    return stickyNotes.filter(stickyNote => stickyNote.color === getColor(color));
  }

}
