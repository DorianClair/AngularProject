import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {ProductListComponent} from './Products/product-list.component';
import {ConvertToSpacesPipe} from "./shared/converto-to-spaces.pipe";
import {StarComponent} from './shared/star.component';


@NgModule({
  declarations: [
    ProductListComponent,
    AppComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
