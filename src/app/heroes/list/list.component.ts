import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes:string[] = ['Hulk','Ironman','Flash'];
  public deletedHero?:string;

  removeLastHeroe():void
  {
    this.deletedHero = this.heroes.pop();
  }

}
