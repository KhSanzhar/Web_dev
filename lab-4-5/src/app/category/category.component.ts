import { Component } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{
  
  prods = products;
  category : Product[]=[];
  constructor(){
    this.category=[];
    for(let x of products){
      let res=this.category.find(element=>element.category===x.category);
      if(res===undefined) this.category.push(x);
      
    }
  }

}
