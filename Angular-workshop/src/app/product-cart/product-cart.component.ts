import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  cartlist: any=[];
  _adddproduct: any;
  get addProduct(): any {
    return this._adddproduct;
  }
  @Input()
  set addProduct(val: any) {
    if (val) {
      let _index = -1;
      this.cartlist.forEach((object,index)=>{
        if(object.pId == val.pId){
          _index = index
        }
      })
      if(_index > -1){
        this.cartlist[_index].qty = Number(this.cartlist[_index].qty)+ Number(val.qty);
      }else{
        this.cartlist.push(JSON.parse(JSON.stringify(val)));
      }
    }
  }

  ngOnInit() {
  }
  constructor() { }
}
