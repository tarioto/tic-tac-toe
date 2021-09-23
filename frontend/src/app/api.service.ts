import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  createNewGame() {
    return this.http.get('/api/create-new-game')
  }

  move(body: any) {
    return this.http.post('/api/move', body)
  }
}
