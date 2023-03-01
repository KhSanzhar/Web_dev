import { Component, OnInit,Input } from '@angular/core';

import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products = products;
  prd: Product | undefined;
  constructor(private activeRoute: ActivatedRoute){}
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productCategory'));

    // Find the product that correspond with the id provided in route 
    this.prd = products.find(product => product.category === productIdFromRoute);
  }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
