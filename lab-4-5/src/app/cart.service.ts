import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  // Метод добавляет продукт в массив items.
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Метод собирает элементы, которые пользователи 
  // добавляют в корзину, и возвращает каждый элемент с соответствующим количеством.
  getItems() {
    return this.items;
  }

  // Метод возвращает пустой массив элементов, который опустошает корзину.
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }

  deleteItem(index:number){
    console.log(this.items[index].name);
    this.items.splice(index,1);
    
  }

  constructor(
    private http: HttpClient
  ) { }
}
