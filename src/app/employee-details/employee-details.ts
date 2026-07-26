import { Employee } from '../employee';
import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  imports: [],
  providers: [EmployeeService], // <-- Missing if not providedIn: 'root'
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})


export class EmployeeDetails implements OnInit {

  private employeeService = inject(EmployeeService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  employees = signal<Employee[]>([]);
  employee: Employee = new Employee();


ngOnInit(): void {
 
  if (this.activatedRoute.snapshot.params['id']) {
    let employeeId: Number = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(employeeId)
      .subscribe({
        next: (data: Employee) =>  {
        this.employee = data;
        this.employees.update(employees => [...employees, this.employee]);
        },
        error: (err: String) => console.error('Failed to load employee', err)
      }); 
  }
  
}
}
