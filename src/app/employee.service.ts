import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
    providedIn: "root"
})
export class EmployeeService {

    private baseURL = "http://localhost:8080/api/v1/employee";

    constructor(private HttpClient: HttpClient) {

    }

    getEmployeeList(): Observable<Employee[]>{
        return this.HttpClient.get<Employee[]>(this.baseURL);
    }

    
}
