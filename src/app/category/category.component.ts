import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private fireStore: AngularFirestore, private fb: FormBuilder, private categoryService: CategoryService) {
  }

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

      this.fireStore.collection("categories").add({cat: catName})
          .then((docRef) => {
            console.log("Document ref with id ", docRef.id);

            docRef.update({id: docRef.id});
          })
          .catch((error) => {
            console.error("Error adding document ", error);
          });

      this.categoryForm.reset();
    }
  }
}
