import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
    providedIn: "root"
})
export class EmployeeService {

    private baseURL = "http://localhost:8080/api/v1/employee";
    private headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });

    constructor(private HttpClient: HttpClient) {

    }

    getEmployeeList(): Observable<Employee[]>{
        return this.HttpClient.get<Employee[]>(this.baseURL);
    }

    createEmployee(employee: Employee): Observable<Object>{
        return this.HttpClient.post(this.baseURL, employee, 
            {
              headers: this.headers
            });
    }
    
}
