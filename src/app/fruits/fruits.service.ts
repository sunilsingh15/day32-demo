import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  apiURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Fruits[]>(this.apiURL + "fruits");
  }
}
