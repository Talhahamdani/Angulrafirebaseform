import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {DataService} from "../services/data.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFirestore} from "@angular/fire/compat/firestore";
// import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productForm: FormGroup;
  categories: any=[];
  // fbData:any;
  selectedFile: File | null = null;
  uploading: boolean = false;



  constructor(private fireStore:AngularFirestore ,private fb: FormBuilder,private categoryService: CategoryService,private dataService: DataService,private fireStorage:AngularFireStorage) {}

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
      // uploadFile: [null, Validators.required]
    });
    this.categoryService.getCollectionData("categories").subscribe(firebaseData => {
      console.log('Category List:', firebaseData);
      this.categories = firebaseData;
    });

    // this.categoryService.mycategories.subscribe(newCategories => {
    //
    //   this.categories = [newCategories];
    //
    // });

    // const storedCategories = localStorage.getItem('categories');
    // this.categories = storedCategories ? JSON.parse(storedCategories) : [];
  }
  async onSubmit(): Promise<void> {
    if (this.selectedFile) {
      const path = `th/${this.selectedFile.name}`;

      try {
        this.uploading = true;
        const uploadTask = await this.fireStorage.upload(path, this.selectedFile);
        const url = await uploadTask.ref.getDownloadURL();
        console.log(url);

        if (this.productForm.valid) {
          this.fireStore.collection('product').add({url: await url, ...this.productForm.value});

          this.productForm.reset();
          this.selectedFile = null;
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
     finally {
      this.uploading = false;
    }
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  removeCategory(categoryToRemove:any): void {
    this.categories = this.categories.filter((category: any) => category !== categoryToRemove);
    // this.categoryService.setCategories(categoryToRemove)
      this.fireStore.collection('categories').doc(categoryToRemove.id).delete();
      console.log(categoryToRemove)

      console.log(this.categories)
  }
   onFileSelected(event: any):void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      console.log('My SelectedFile:', this.selectedFile);
    }
  }
    // if (file) {
    //   const path = `th/${file.name}`;
    //   const uploadTask = await this.fireStorage.upload(path, file);
    //   const url = await uploadTask.ref.getDownloadURL();
    //   console.log(url);
    // }
}
