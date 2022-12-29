import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inyectamos el httpClient en el constructor
  constructor(private http: HttpClient) { }

//obtener los usuarios del servicio web
getUsers(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}

}
