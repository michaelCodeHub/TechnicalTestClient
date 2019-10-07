import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from '../models/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private endpoint = 'https://technicalterstrestapi.herokuapp.com/api/v1/users';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }
  
  public getSearch(searchItem: String): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "/search/" + searchItem,
      this.httpOptions
    );
  }
}
