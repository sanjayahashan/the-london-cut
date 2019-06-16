import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { App } from 'src/app/shared/models/appointment.model';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
    private appointmentService : AppointmentService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.appointmentForm.get('_id').value) {
      this.appointment = this.appointmentForm.value;
      this.appointmentService.add(this.appointment).subscribe(App => {
      });
      this.router.navigate(['/previous'])
    }
    // else {
    //   this.appointment = this.appointmentForm.value;
    //   this.e.update(this.appointment).subscribe(order => {
        
    //   });
    // }
  }


}
