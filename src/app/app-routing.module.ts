import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  
  {
    path:"List All Employees", component:EmployeelistComponent
  },
  {
    path:"Add Employee",component:AddEmployeeComponent
  },
  {
    path:"UpdateEmployee/:id",component:UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponenets=[EmployeelistComponent,AddEmployeeComponent,UpdateEmployeeComponent]
