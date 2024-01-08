import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmdialogComponent} from "../confirmdialog/confirmdialog.component";
// import {CategoryService} from "../services/category.service";
// import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  formData: any[] = [];
  isValid: boolean = false;
  searchForm: FormGroup;
  filteredData: any[] = [];
  // imageUrl: string | null = null;
  product: any;

  constructor( private dialog: MatDialog,private fb: FormBuilder,private dataService: DataService,private fireStore:AngularFirestore) {}

  ngOnInit(): void {
    this.dataService.fetchData('product').subscribe((firebaseData) => {
      console.log('Product List:', firebaseData);
      this.formData = firebaseData;
    });
    this.searchForm = this.fb.group({
      fieldName: ['']
    });
    this.searchForm.get('fieldName').valueChanges.subscribe((val) => {
      this.onSearch(val);
    });

    // const filePath = 'gs://data-management-1a6cc.appspot.com/th'; // Replace with the actual path
    // this.storageService.ref(filePath).getDownloadURL().subscribe(url => {
    //   this.imageUrl = url;
    //   console.log(this.imageUrl)
    // });
  }

  onSearch(myVal: any): void {
    console.log(myVal);

    if (this.formData) {
      this.filteredData = this.formData.filter((res) =>
        res && res.name && res.name.toLowerCase().includes(myVal.toLowerCase())
      );
      console.log(this.filteredData);
      this.isValid = true;
    }
  }
  async removeProduct(productToRemove: any): Promise<void> {
    const dialogRef = this.dialog.open(ConfirmdialogComponent);
    const result = await dialogRef.afterClosed().toPromise();
    if (result === true) {
      this.formData = this.formData.filter((product: any) => product !== productToRemove);
      this.fireStore.collection('product').doc(productToRemove.productId).delete();
    }
  }

  // removeProduct(productToRemove:any): void {
  //   this.formData = this.formData.filter((product: any) => product !== productToRemove);
  //   // this.categoryService.setCategories(categoryToRemove)
  //    this.fireStore.collection('product').doc(productToRemove.productId).delete();
  //   console.log(productToRemove)
  //
  //   console.log(productToRemove)
  // }
}
