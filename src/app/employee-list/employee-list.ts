import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
 
  employees: Employee[];

 constructor() {
 this.employees = [];
 }

 ngOnInit(): void {
   this.employees = [
    {
      "id": 20,
      "firstName": "Mateo",
      "lastName": "Villada",
      "emailId": "mvg@gmail.com"
    },
    {
     "id": 21,
      "firstName": "Brenda",
      "lastName": "Isella",
      "emailId": "mvg@gmail.com"
    }
   ]
 }
}
