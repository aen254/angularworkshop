import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  cartlist: any[];
  _adddproduct: any;
  get addProduct(): any {
    return this._adddproduct;
  }
  @Input()
  set addProduct(val: any) {
    if (val) {
      this.cartlist.push(JSON.parse(JSON.stringify(val)))
    }
  }

  ngOnInit() {
  }
  constructor() { }
}
