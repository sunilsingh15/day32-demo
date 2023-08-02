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

  create(resource: string, payload: Fruits) {
    return this.http.post(this.apiURL + resource, payload);
  }

  getByID(resource: string, id: number) {
    return this.http.get<Fruits>(this.apiURL + resource + `/${id}`);
  }

  update(resource: string, payload: Fruits) {
    return this.http.put(this.apiURL + resource + `${payload.id}`, payload);
  }

  delete(resource: string, id: number) {
    return this.http.delete(this.apiURL + resource + `/${id}`);
  }
}
