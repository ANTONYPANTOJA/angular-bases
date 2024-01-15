import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'ironMan';
  public age:number = 45;

  get capitalizedName():string
  {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  changeName():void{
      this.name = 'Spiderman';
  }
  changeEdad():void{
      this.age = 25;
  }
  resetName():void{
      this.name = 'ironMan';
      this.age = 45;

    //document.querySelector('h1')!.innerHTML = 'Desde Angular';
      document.querySelectorAll('h1')!.forEach( data => {
          data.innerHTML = '<h1>Desde Angular</h1>';
      })
  }
}
