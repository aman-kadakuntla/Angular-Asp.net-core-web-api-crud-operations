import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeereposService } from '../employeerepos.service';
import { Router } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(public service: EmployeereposService,public router:Router,private toastr:ToastrService)
    {}
  //employeesList:any=this.service.employeeList;
  ngOnInit(): void {
    this.service.refreshList();
    //this.refreshList();
    //console.log("result from list comp"+this.employeesList);
  }
  // refreshList() {
  //   this.service.refreshList().subscribe(res=>{
  //     this.employeesList=res;
  //     console.log("list count="+this.employeesList.length);
  //   });
  // }
  updateEmployee(emp:Employee)
  {
    this.service.updateEmp=null;
    this.service.updateEmp=emp;
    this.router.navigateByUrl("/UpdateEmployee/id");
  }
  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe(
      res=>{
        this.toastr.success("Deleted Successfully","Status"),
        this.service.refreshList()
      },
      err=>this.toastr.error("Something went wrong","Error")
    );
  }
  /*
  updateEmployee(emp:number)
  {
    this.router.navigateByUrl("/UpdateEmployee/emp");
   this.service.updateEmployee(emp);
  }*/
}
