import { Component, OnInit } from '@angular/core';

import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { App } from 'src/app/shared/models/appointment.model';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css'],
  providers: [AppointmentService ]
})

export class PreviousComponent implements OnInit {
  previousList: Observable<App[]>;
  displayValue = "";

  constructor(
    private previousService: AppointmentService
  ) { }

  ngOnInit() {
    this.getAppointment();
  }

  getAppointment() {
    this.previousList = this.previousService.all();
    console.log(this.previousList);
  }

  // search(term: string) {
  //   this.previousList = this.PreviousService.all().pipe(map(
  //     items => items.filter(item => item.name.toLowerCase().includes(term.toLowerCase())
  //   )));
  // }

  // display(type: String) {
  //   if(type!="") {
  //     this.previousList = this.PreviousService.all().pipe(map(
  //       items => items.filter(item => item.type==type)
  //     ));
  //   }
  //   else {
  //     this.previousList = this.PreviousService.all();
  //   }
  // }

 
}
 