import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(){
    return this.httpClient.get("https://rickandmortyapi.com/api/character/");
  }
}
