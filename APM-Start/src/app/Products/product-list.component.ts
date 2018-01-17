///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number =2;
  showImage: boolean = false;
  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[];
  constructor(private _productService: ProductService) {
    this.filteredProducts=this.products;
  }
  toggleImage():void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('in OnInit');
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' +message;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
