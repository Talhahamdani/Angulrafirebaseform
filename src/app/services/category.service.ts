import { Injectable } from '@angular/core';
// import {BehaviorSubject} from "rxjs";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // private categorySource = new BehaviorSubject<string[]>([]);
  // mycategories = this.categorySource.asObservable();


  constructor(private fireStore:AngularFirestore) { }


  // setCategories(categories: any[]): void{
  //   // this.categorySource.next(categories);
  //   console.log(categories)
  //    this.fireStore.collection('categories').valueChanges();
  //   // console.log(this.categories)
  // }

  // createCategory(category: any): void {
  //   category.forEach(catName => {
  //     this.fireStore.collection("categories").add({ name: catName });
  //   });
  // }
  getCollectionData(categoryList: any): Observable<any[]> {
    console.log(categoryList);
    return this.fireStore.collection("categories").valueChanges();
  }
  // deleteCategory(categoryList: any)
  // {
  //   console.log(categoryList)
  //   return this.fireStore.collection('categories').doc(categoryList).delete()
  // }
  //   getFormData(formData: any[]): void {
  //     const formDataArray = [formData];
  //     formDataArray.map(formData => {
  //       this.fireStore.collection('product').add(formData);
  //     });
  //   }
  //
  // fetchData(myForm: any): Observable<any[]> {
  //   console.log(myForm);
  //   return this.fireStore.collection("product").valueChanges();
  // }

}
