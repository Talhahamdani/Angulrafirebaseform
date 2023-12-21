import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../category.service";
import {DataService} from "../data.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productForm: FormGroup;
  categories: any=[]


  constructor(private fb: FormBuilder,private categoryService: CategoryService,private dataService: DataService) {}

  get nameControl() {
    return this.productForm.get('name');
  }

  get priceControl() {
    return this.productForm.get('price');
  }

  get categoryControl() {
    return this.productForm.get('category');
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required]
    });

    this.categoryService.mycategories.subscribe(newCategories => {

      this.categories = [...this.categories,...newCategories];

    });

    const storedCategories = localStorage.getItem('categories');
    this.categories = storedCategories ? JSON.parse(storedCategories) : [];
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      // this.submittedData.push(formData);
      this.dataService.setFormData(formData);
      this.productForm.reset();
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  removeCategory(categoryToRemove: string): void {

    this.categories = this.categories.filter((category: string) => category !== categoryToRemove);

  }
}