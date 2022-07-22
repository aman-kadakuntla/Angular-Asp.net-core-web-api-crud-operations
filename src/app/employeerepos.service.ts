import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Employee } from './Employee';


@Injectable({
  providedIn: 'root'
})

export class EmployeereposService extends Employee{

  employeeList:Employee[]=[];
  
  constructor(private toastr:ToastrService,private http:HttpClient) {
    super();
    this.refreshList();
  }
  updateEmp:any;
  baseurl:string="https://localhost:7249/api/";
  getUrl:string="https://localhost:7249/api/Employees";
  //get request
  refreshList()
  {
     this.http.get(this.getUrl).subscribe(
      res => this.employeeList = res as Employee[],
      err => console.log(err)
     );
  }
  //get single employee details
  getSingleEmployee(id:number)
  {
    return this.http.get(this.getUrl+"/"+id);
  }
  //post request
  postUrl:string="https://localhost:7249/api/Employees"
  addEmployee(formvalue:Employee)
  {
    return this.http.post(this.postUrl,formvalue);
  }
  //put request
  
  updateEmployee(formvalue:Employee)
  {
    return this.http.put(this.getUrl+"/"+formvalue.employeeId,formvalue);
  }
  //delete request

  deleteEmployee(id:number)
  {
    return this.http.delete(this.getUrl+"/"+id);
  }
  /*
  //'https://localhost:7249/api/Employees

  // employeeList: Employee[] = [
  // {
  //   employeeId:1,employeeName:'aman',employeeLocation:'hyderabad'
  // },
  // {
  //   employeeId:2,employeeName:'Aru',employeeLocation:'banglore'
  // },
  // {
  //   employeeId:3,employeeName:'Srinija',employeeLocation:'mumbai'
  // }
// ];
  addEmployee(formvalue:Employee) 
  {
    this.toastr.success("added");
    this.employeeList.push(formvalue);
    
  }
  deleteEmployee(id:number){
    this.employeeList=this.employeeList.filter(e=>e.employeeId!=id);
    this.toastr.success("Deleted successfully","delete status",{closeButton:true});
   // console.log(this.employeeList);
  }
  updateEmployee(id:number)
  {
    this.updateEmp=this.employeeList.find(e=>e.employeeId==id);
   // console.log("data from service"+this.updateEmp);
  }
  updateEmployeeDetails(formvalue:Employee)
  {
    this.employeeList.forEach(element => {
      if(element.employeeId==formvalue.employeeId)
      {
        element.employeeLocation=formvalue.employeeLocation;
        element.employeeName=formvalue.employeeName;
      }
    });
    this.toastr.success("Updated Successfully","Update Status");   
//    console.log(this.employeeList.find(e=>e.employeeId==formvalue.employeeId));*/
  }
