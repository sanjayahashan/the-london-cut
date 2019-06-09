import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { App } from 'src/app/shared/models/appointment.model';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointment : App;

  appointmentForm = new FormGroup ({
    _id: new FormControl(),
    // appId:new FormControl(''),
    name: new FormControl(''),
    contactNo: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),

  });

  constructor(
    private employeeService : AppointmentService,
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.appointmentForm.get('_id').value) {
      this.appointment = this.appointmentForm.value;
      this.employeeService.add(this.appointment).subscribe(order => {
      });
    }
    // else {
    //   this.appointment = this.appointmentForm.value;
    //   this.employeeService.update(this.appointment).subscribe(order => {
        
    //   });
    // }
  }

}
