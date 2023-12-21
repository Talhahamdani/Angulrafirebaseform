import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categorySource = new BehaviorSubject<string[]>([]);
  mycategories = this.categorySource.asObservable();


  setCategories(categories: string[]): void {
    this.categorySource.next(categories);
    console.log(categories)
  }

  constructor() { }
}
