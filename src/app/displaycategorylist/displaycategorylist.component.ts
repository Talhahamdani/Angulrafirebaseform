import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-displaycategorylist',
  templateUrl: './displaycategorylist.component.html',
  styleUrls: ['./displaycategorylist.component.css']
})
export class DisplaycategorylistComponent implements OnInit{
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {}
  ngOnInit() {
    this.categoryService.getCollectionData("categories").subscribe(firebaseData => {
      console.log('Category List:', firebaseData);
      this.categories = firebaseData;
    });
  }
  //   this.catService.mycategories.subscribe(newCategories => {
  //     this.categories = [newCategories];
  //     console.log(...newCategories)
  //
  //   });
  //
  //   const storedCategories = localStorage.getItem('categories');
  //   this.categories = storedCategories ? JSON.parse(storedCategories) : [];
  //
  // }

}
