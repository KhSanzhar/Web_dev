import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product | undefined;
  // @Input cntLikes = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(product:Product ): void {
    product.like++;
  }

}
