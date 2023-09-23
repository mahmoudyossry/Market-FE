import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from 'app/app.module';


@Injectable({
  providedIn: AppModule
})

export class ProductService {
  baseUrl='https://localhost:7085/api/Product/'
  constructor(
    private http: HttpClient
  ) { }

  GetById(id:number) {
  
    let url = `${this.baseUrl + 'Get'}?id=${id}`;
    return this.http.get(`${url}`).toPromise();
  }

  create(body) {
    debugger
    let url = `${this.baseUrl+ 'Create'}`;
    return this.http.post(`${url}`, body).toPromise();
  }

  edit(body) {
    let url = `${this.baseUrl+'Update'}`;
    return this.http.post(`${url}`, body).toPromise();
  }

  getAll() {
    let url = `${this.baseUrl + 'GetAll'}`;
    return this.http.get<any>(`${url}`).toPromise();
  }

  delete(id) {
    let url = `${this.baseUrl + 'Delete'}?id=${id}`;
    return this.http.post(`${url}`,null).toPromise();
  }

}
