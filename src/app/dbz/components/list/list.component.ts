import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent
{
    @Input()
    public characterList: Character[] = [
      {
        name: 'Trunks',
        power: 10
      },
      {
        name: 'Vegeta',
        power: 781
      }];

    @Output()
    onDeleteIdCharacter:EventEmitter<string> = new EventEmitter();

  //onDeleteCharacter(idCharacter?:string):void
    onDeleteCharacter(idCharacter:string):void
    {

      console.log('--- Event ID Delete --');
      this.onDeleteIdCharacter.emit(idCharacter);

    }


}
