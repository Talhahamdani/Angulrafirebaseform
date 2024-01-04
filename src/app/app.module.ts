import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DisplayComponent } from './display/display.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material/material.module";
import { DisplaycategorylistComponent } from './displaycategorylist/displaycategorylist.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "./environments";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    DisplayComponent,
    DisplaycategorylistComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
