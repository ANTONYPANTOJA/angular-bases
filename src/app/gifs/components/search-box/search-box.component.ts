import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="BUscar Gifs..."
     (keyup.enter)="searchTag()"
     #txtTagInput
     >

      `
})

export class SearchBoxComponent implements OnInit {

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService)
  {

  }

  ngOnInit() { }

  searchTag():void
  {
    const newTag = this.tagInput.nativeElement.value
    console.log(newTag);

    //Llamar al Servicio
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

}
