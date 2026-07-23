import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'; 
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-update-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css',
})

export class UpdateEmployee implements OnInit {

  employeeForm: FormGroup;
  employee: Employee = new Employee();


  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {

    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
  
    if (this.employeeForm.valid && this.activatedRoute.snapshot.params['id']) {
      let employeeId: Number = this.activatedRoute.snapshot.params['id'];
      this.updateEmployee(employeeId); 
    }

  }

  updateEmployee(employeeId: Number){
    this.employeeService
      .updateEmployee(employeeId, this.employeeForm.value)
        .subscribe({
          next: (data:Object) => {
            console.log(data);
            this.goToEmployeeList();
          },
          error: (err:Error) => console.error(err)
        });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
