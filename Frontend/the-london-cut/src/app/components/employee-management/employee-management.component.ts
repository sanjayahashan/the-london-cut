import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  employeeList: Observable<Employee[]>;
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
    this.getItems();
  }

  getItems() {
    this.employeeList = this.employeeService.all();
    console.log(this.employeeList);
  }

  search(term: string) {
    this.employeeList = this.employeeService.all().pipe(map(
      employees => employees.filter(employee => employee.empId.toLowerCase().includes(term.toLowerCase())
    )));
  }

  display(description: String) {
    this.employeeList = this.employeeService.all().pipe(map(
      employees => employees.filter(employee => employee.empId==description)
    ));
  }

  deleteEmployee(id) {
    this.employeeService.delete(id).subscribe(data => {
      
    });
    window.location.reload();
  }

  onEdit(employee){
    this.employeesForm.controls._id.setValue(employee._id)
    this.employeesForm.controls.empId.setValue(employee.empId)
    this.employeesForm.controls.empName.setValue(employee.empName)
    this.employeesForm.controls.empAdd.setValue(employee.empAdd)
    this.employeesForm.controls.empContact.setValue(employee.empContact)
    this.employeesForm.controls.empGender.setValue(employee.empGender)
    this.employeesForm.controls.startDate.setValue(employee.startDate)

  }


  onSubmit() {
    if(!this.employeesForm.get('_id').value) {
      this.employee = this.employeesForm.value;
      this.employeeService.add(this.employee).subscribe(order => {
      });
      window.location.reload();
    }
    else {
      this.employee = this.employeesForm.value;
      this.employeeService.update(this.employee).subscribe(order => {
        
      });
      window.location.reload();
    }
    console.log(this.employeesForm)
  }

}
