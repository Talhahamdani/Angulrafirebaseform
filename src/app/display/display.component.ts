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
  filteredData: any[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService, private catService: CategoryService) {}


    ngOnInit(): void {
      this.dataService.myFormData.subscribe(newData => {
        if (!Array.isArray(this.formData)) {
          this.formData = [];
        }
        this.formData.push(newData);
        this.searchProducts();
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
      this.searchProducts();
    }
  }

    searchProducts(): void {
      if (this.formData) {
      this.filteredData = this.formData.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredData = [];
    }
  }

}
