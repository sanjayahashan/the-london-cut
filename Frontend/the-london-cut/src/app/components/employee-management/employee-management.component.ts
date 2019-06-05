import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  
  employee : Employee;

  employeesForm = new FormGroup ({
    _id: new FormControl(),
    empId:new FormControl(''),
    empName: new FormControl(''),
    empAdd: new FormControl(''),
    empContact: new FormControl(''),
    empGender: new FormControl(''),
    startDate: new FormControl(''),
    
  });

  constructor(
    private employeeService : EmployeeService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.employeesForm.get('_id').value) {
      this.employee = this.employeesForm.value;
      this.employeeService.add(this.employee).subscribe(order => {
      });
    }
    else {
      this.employee = this.employeesForm.value;
      this.employeeService.update(this.employee).subscribe(order => {
        
      });
    }
  }

}
