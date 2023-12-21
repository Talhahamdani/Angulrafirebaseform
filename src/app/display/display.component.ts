import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";
import {DataService} from "../data.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  categories:any;
  // categoryList:any;
  formData: any;
  // products: any[] = [];
  // searchTerm: string = '';

  constructor(private dataService: DataService ,private catService:CategoryService) {}

  ngOnInit(): void {

    this.dataService.myFormData.subscribe(data => {
      this.formData = data;
      console.log(this.formData)
    });

    this.catService.mycategories.subscribe(newCategories => {
      // Update the local variable by prepending new categories to the existing list
      this.categories = [...newCategories, ...this.categories];

    });

    const storedCategories = localStorage.getItem('categories');
    this.categories = storedCategories ? JSON.parse(storedCategories) : [];


  }
  removeCategory(categoryToRemove: string): void {

    this.categories = this.categories.filter((category) => category !== categoryToRemove);

  }

}
