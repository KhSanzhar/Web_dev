import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, products} from "../products";
import {categories, Category} from "../categories";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product: Product | undefined;
  category: Category | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }


  products = products

  ngOnInit() {
    this.reloadCategory();
  }

  reloadCategory() {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    const productCategoryFromRoute = String(routeParams.get('categories'));
    // Find the product that correspond with the id provided in route.
    this.category = categories.find(category => category.category === productCategoryFromRoute);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  buttonHandler = (idx: number) => {
    products.find(product => idx === product.id ? product.NumOfLikes += 1 : 0);
  };

  buttonRemover = (idx: number) => {

  }

}
