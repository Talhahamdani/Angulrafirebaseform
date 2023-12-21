import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData = new BehaviorSubject<any>(null);
  myFormData = this.formData.asObservable();

  setFormData(data: any): void {
    this.formData.next(data);
    console.log('Form Data:', data);

  }
  constructor() { }
}
