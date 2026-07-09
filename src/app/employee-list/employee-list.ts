import { Component, OnInit, inject, signal } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true, // Explicit in older v14/15, default in newer versions
  imports: [CommonModule],
  providers: [EmployeeService], // <-- Missing if not providedIn: 'root'
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
 
private employeeService = inject(EmployeeService);


// 2. Using a Signal for reactive state management (avoids leak risks)
  employees = signal<Employee[]>([]);

  
 ngOnInit(): void {
  this.getEmployees();  
 }


 private getEmployees(): void{
    this.employeeService.getEmployeeList().subscribe({
        next: (data: Employee[]) =>  {
      console.log('Employees:', data);
      console.log('Is array?', Array.isArray(data));
      console.log('Length:', data?.length);

      this.employees.set(data);
    },
      error: (err: String) => console.error('Failed to load employees', err)
    });
 }


}
