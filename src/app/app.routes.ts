import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployee } from './create-employee/create-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { EmployeeDetails } from './employee-details/employee-details';

export const routes: Routes = [
        {path: '', redirectTo: 'employees', pathMatch: 'full'},
    {path: 'employees', component: EmployeeList},
    {path: 'create-employees', component: CreateEmployee},
    {path: 'update-employee/:id', component: UpdateEmployee},
    {path: 'employee-details/:id', component: EmployeeDetails}
];

