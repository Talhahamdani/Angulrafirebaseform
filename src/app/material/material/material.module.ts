import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";


const MyMaterial=[MatButtonModule,MatIconModule, MatSelectModule,
  MatCardModule,MatFormFieldModule,MatInputModule,MatProgressSpinnerModule,MatDialogModule,
MatToolbarModule];
@NgModule({
  imports: [MyMaterial],
  exports:[MyMaterial]
})
export class MaterialModule { }
