import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DisplayComponent } from './display/display.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    DisplayComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatCardModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
