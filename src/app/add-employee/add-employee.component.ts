import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../Employee';
import { EmployeereposService } from '../employeerepos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent extends Employee implements OnInit  {

  
  constructor(private service:EmployeereposService,private router:Router,private toastr:ToastrService) { 
    super();
  }
  employeeData:Employee=new Employee();

  ngOnInit(): void {
    
  }
  addEmployee(formvalue:NgForm)
  {
    this.service.addEmployee(this.employeeData).subscribe(
      res=>{
        this.toastr.success("Added Successfully","Status"),
        this.service.refreshList();
      },
      err=>console.log(err)
    );
    this.router.navigateByUrl("/List All Employees");
  }
  /*
  addEmployee()
  {
    this.service.employeeList.push(this.employeeData);
    this.employeeData=new Employee();
    this.router.navigateByUrl("/List All Employees");
  }*/
}
