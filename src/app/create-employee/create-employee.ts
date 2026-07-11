import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'; 
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee implements OnInit{
 employeeForm: FormGroup;
 employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder) {

    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]]
    });

  }

  saveEmployee(){
    this.employeeService
        .createEmployee(this.employeeForm.value)
        .subscribe({
            next: data => {
                console.log(data);
                this.goToEmployeeList();
            },
            error: err => console.error(err)
        });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.saveEmployee();
      // Call your Spring Boot service here
      // this.employeeService.createEmployee(this.employeeForm.value).subscribe(...)
    }

  }


  ngOnInit(): void {
    
  }

}
