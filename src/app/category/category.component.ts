import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryService) {}

  get catNameControl() {
    return this.categoryForm.get('catName');
  }
  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      catName: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const catName = this.catNameControl.value;
      const categories: string[] = [catName];
      this.categoryService.setCategories(categories);
      this.categoryForm.reset();
      Object.keys(this.categoryForm.controls).forEach(key => {
        this.categoryForm.controls[key].setErrors(null)
      });
    }
    }
}
