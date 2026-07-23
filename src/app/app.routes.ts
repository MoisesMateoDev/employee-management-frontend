import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployee } from './create-employee/create-employee';
import { UpdateEmployee } from './update-employee/update-employee';

export const routes: Routes = [
        {path: '', redirectTo: 'employees', pathMatch: 'full'},
    {path: 'employees', component: EmployeeList},
    {path: 'create-employees', component: CreateEmployee},
    {path: 'update-employee/:id', component: UpdateEmployee}
];

