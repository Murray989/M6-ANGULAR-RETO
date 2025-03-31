import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasaldoService {  
  constructor(private httpClient:HttpClient) { }
  getSaldo():Observable<any>{
    return this.httpClient.get('http://localhost:8080/api/cuentas/1');
  }
}
