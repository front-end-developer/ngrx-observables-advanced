import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private environment = {
    api: {
      urlProducts: 'api/products'
    }
  };

  private selectedProductSource = new BehaviorSubject<Product | null>(null);
  selectedProductChanges$ = this.selectedProductSource.asObservable();

  constructor(http: HttpClient) {}

  changeSelectedProduct(selectedProduct: Product | null): void {
    this.selectedProductSource.next(selectedProduct);
  }
}
