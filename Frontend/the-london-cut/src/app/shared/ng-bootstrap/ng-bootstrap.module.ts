import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselModule,  } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [
    NgbCarouselModule
  ]
})
export class NgBootstrapModule { }
