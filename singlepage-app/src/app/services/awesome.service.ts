import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  update(id: number, value: any) {
    throw new Error('Method not implemented.');
  }
  get(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  getListAwesome(): Observable<any>{
    return this.http.get(`${environment.apiUrl}`);
  }
  getAwesome(id:number): Observable<any>{
    return this.http.get(`${environment.apiUrl}/${id}`);
  }
  updateAwesome(id:number,data: any): Observable<any>{
    return this.http.put(`${environment.apiUrl}/${id}`,data,{headers: headers});
  }
  deleteAwesome(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/${id}`);
  }
}
