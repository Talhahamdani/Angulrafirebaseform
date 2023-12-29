import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";
import {DataService} from "../data.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  categories: any[] = [];
  formData: any[] = [];
  searchTerm: any;
  isValid:boolean=false;
  filteredData:any;

  constructor(private dataService: DataService, private catService: CategoryService) {}


    ngOnInit(): void {
      this.dataService.myFormData.subscribe(newData => {
        if (!Array.isArray(this.formData)) {
          this.formData = [];
        }
        this.formData.push(newData);
        console.log(this.formData);
      });

      this.catService.mycategories.subscribe(newCategories => {
        this.categories = [...this.categories, ...newCategories];
      });

      const storedCategories = localStorage.getItem('categories');
      this.categories = storedCategories ? JSON.parse(storedCategories) : [];
    }

    deleteProduct(num: number): void {
      if (this.formData.length) {
      this.formData.splice(num, 1);
    }
  }
  onSearch(): void {
    // console.log(this.searchTerm);
    if (this.formData) {
      this.searchTerm = this.formData.filter(res =>
        res.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      console.log(this.searchTerm);
      this.isValid=true;
      this.searchTerm.reset();
    }
  }

}
