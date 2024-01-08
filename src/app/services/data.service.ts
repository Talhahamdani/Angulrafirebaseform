import { Injectable } from '@angular/core';
// import {BehaviorSubject} from "rxjs";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // formData = new BehaviorSubject<any>(null);
  // myFormData = this.formData.asObservable();
  // private imageUrlSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  // imageUrl$: Observable<string | null> = this.imageUrlSubject.asObservable();

  constructor(private fireStore:AngularFirestore,private fireStorage:AngularFireStorage) { }

  // setImageUrl(url: string | null): void {
  //   this.imageUrlSubject.next(url);
  //   console.log(url)
  // }


  // setFormData(data: any): void {
  //   this.formData.next(data);
  //   console.log('Form Data:', data);
  // }
  // getFormData(formData: any[]): void {
  //   const formDataArray = [formData];
  //   formDataArray.map(formData => {
  //     this.fireStore.collection('product').add(formData);
  //
  //   });
  // }

  fetchData(myForm: any): Observable<any[]> {
    console.log(myForm);
    return this.fireStore.collection("product").valueChanges();
  }

  // fetchData2(url: any): AngularFireStorageReference {
  //   console.log(url);
  //   return this.fireStorage.refFromURL("gs://data-management-1a6cc.appspot.com");
  // }
  // getImageUrl(filePath: string): Observable<string | null> {
  //   try {
  //     const ref = this.fireStorage.ref(filePath);
  //     return ref.getDownloadURL().pipe(
  //       catchError((error) => {
  //         console.error('Error getting download URL:', error);
  //         return of(null); // Return null in case of an error
  //       })
  //     );
  //   } catch (error) {
  //     console.error('Error in getImageUrl:', error);
  //     return of(null); // Return null in case of an error
  //   }
  // }

}
