import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-displaycategorylist',
  templateUrl: './displaycategorylist.component.html',
  styleUrls: ['./displaycategorylist.component.css']
})
export class DisplaycategorylistComponent implements OnInit{
  categories: any[] = [];
  constructor(private catService: CategoryService) {}
  ngOnInit() {
    this.catService.mycategories.subscribe(newCategories => {
      this.categories = [...this.categories, ...newCategories];
    });

    const storedCategories = localStorage.getItem('categories');
    this.categories = storedCategories ? JSON.parse(storedCategories) : [];

  }

}
