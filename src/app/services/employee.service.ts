import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IEmployee } from '../pages/shared/models/Employee';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  apiurl = 'http://localhost:4000/employee';
  
  constructor(private http: HttpClient) {}

  getAllEmployee(): Observable<ApiResponse<IEmployee[]>> {
    return this.http.get<ApiResponse<IEmployee[]>>(`${this.apiurl}`);
  }

  getEmployee(id: string): Observable<ApiResponse<IEmployee>> {
    return this.http.get<ApiResponse<IEmployee>>(`${this.apiurl}/${id}`);
  }

  createEmployee(employee: IEmployee): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'  // Set the Content-Type header
   });
    return this.http.post(`${this.apiurl}`, employee,  { headers });
  }

  updateEmployee(id: string, employee: IEmployee): Observable<any> {
    return this.http.put(`${this.apiurl}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.apiurl}/${id}`);
  }
}
