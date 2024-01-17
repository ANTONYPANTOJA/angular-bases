import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({

  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'

})

export class MainPageComponent implements OnInit {



  constructor( private dbzService:DbzService)
  {

  }
  ngOnInit() { }

  get character():Character[]
  {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id:string):void{
      this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Character):void
  {
    this.dbzService.onNewCharacter(character);
  }


}
