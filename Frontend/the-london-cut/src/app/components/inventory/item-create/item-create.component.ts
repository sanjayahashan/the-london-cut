import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/shared/models/item.model';
import { ItemService } from 'src/app/shared/services/item.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  item:Item;
  selectedFile: File = null;
  imageURL: any;

  itemForm = new FormGroup ({
    _id: new FormControl(),
    name: new FormControl('',[
      Validators.required
    ]),
    description: new FormControl(),
    quantity: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl('', [
      Validators.required
    ]),
    suit_category: new FormControl(''),
    image: new FormControl()
  });

  constructor(
      private itemService: ItemService,
      private route: ActivatedRoute,
      private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      this.itemService.get(id).subscribe(item => {
        this.itemForm.patchValue(item);
        this.imageURL = 'http://localhost:3000/' + item.image;
      });
    }
  }

  onSubmit() {
    // console.log(this.itemForm.get('_id'));
    if(!this.itemForm.get('_id').value) {
      // this.itemForm.patchValue({_id:''});
      this.item = this.itemForm.value;
      this.itemService.add(this.item).subscribe(item => {
        console.log(item);
      });
      this.itemForm.reset();
      this.imageURL = "";
      this.snackBar.open("Item Datails Saved Successfully", 'Dismiss', {
        duration: 3000
      });
    }
    else {
      this.item = this.itemForm.value;
      this.itemService.update(this.item).subscribe(item => {
        console.log(item);
      });

      //file upload

    }
  }

  onFileSelected(event) {
    // console.log(event);
    this.selectedFile = event.target.files[0];
    this.itemForm.patchValue({
      image: this.selectedFile
    });
    console.log(this.selectedFile);

    const reader = new FileReader();
    reader.onload = e => this.imageURL = reader.result;

    reader.readAsDataURL(this.selectedFile);
  }
}
