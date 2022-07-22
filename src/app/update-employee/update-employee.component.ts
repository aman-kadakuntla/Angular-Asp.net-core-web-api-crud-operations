import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../Employee';
import { EmployeereposService } from '../employeerepos.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent extends Employee implements OnInit {

  employeeData:any;
  
  constructor(public service:EmployeereposService,private router:Router,private toastr:ToastrService) 
  {
    super();
  }
 
  ngOnInit(): void {
    this.employeeData = Object.assign({},this.service.updateEmp);
    this.service.updateEmp=null;
   // console.log("from update employee"+this.employeeData.employeeName);
  }

  updateEmployeeDetails()
  {
    this.service.updateEmployee(this.employeeData).subscribe(
      res=>{
        this.toastr.success("Updated Successfully","Update Status");
        this.service.refreshList();
      },
      err=>alert("something went wrong")
    );
    this.router.navigateByUrl("/List All Employees");

  }
}
