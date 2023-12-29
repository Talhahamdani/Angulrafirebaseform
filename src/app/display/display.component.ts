import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  formData: any[] = [];
  isValid:boolean=false;
  searchForm: FormGroup;
  filteredData: any[]= [];

  constructor(private dataService: DataService,private fb: FormBuilder) {}


    ngOnInit(): void {
      this.dataService.myFormData.subscribe(newData => {
        if (!Array.isArray(this.formData)) {
          this.formData = [];
        }
        this.formData.push(newData);
        console.log(this.formData);
      });
      this.searchForm = this.fb.group({
        fieldName: ['']
      });
      this.searchForm.get('fieldName').valueChanges.subscribe((val) => {
        this.onSearch(val);
      });
    }

    deleteProduct(num: number): void {
      if (this.formData.length) {
      this.formData.splice(num, 1);
    }
  }
  onSearch(myVal:any): void {
    console.log(myVal);

    if (this.formData) {
     this.filteredData= this.formData.filter(res =>
        res.name.toLowerCase().includes(myVal.toLowerCase())
      );
     console.log(this.filteredData);
      this.isValid = true;
    }
  }
}
