import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList:Gif[] = [];

  private _tagsHistory: string[] = [];
  private _apiKeyGifs:string = '45yg5E8XpNTFE38D8eXY8xlTs990ebEl';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag:string)
  {
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag))
    {
      this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag);
    }

      this._tagsHistory.unshift(tag);
      this._tagsHistory = this._tagsHistory.splice(0,10);

      this.saveLocalStorage();
  }

  searchTag(tag: string):void {

    if (tag.length === 0) return;
    //this._tagsHistory.unshift(tag);
      this.organizeHistory(tag);
      console.log(this.tagsHistory);

    //Solicitud Http
    const params = new HttpParams().set('api_key','45yg5E8XpNTFE38D8eXY8xlTs990ebEl')
                                   .set('limit','10')
                                   .set('q',tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{ params })
    .subscribe( resp => {
      this.gifList = resp.data
      console.log({ gifs: this.gifList });

    });

  }

  private saveLocalStorage()
  {
      localStorage.setItem('History',JSON.stringify(this._tagsHistory));
  }
  private loadLocalStorage():void
  {
    const temporal = localStorage.getItem('History');

    if(!localStorage.getItem('History')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem("History")!);
    console.log('LoadLocalStorage');

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);

  }

}
