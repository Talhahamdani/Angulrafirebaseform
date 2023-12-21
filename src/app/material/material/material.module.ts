import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


const MyMaterial=[MatButtonModule,MatIconModule, MatSelectModule,
  MatCardModule,MatFormFieldModule,MatInputModule,];
@NgModule({
  imports: [MyMaterial],
  exports:[MyMaterial]
})
export class MaterialModule { }
