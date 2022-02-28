import { Component, OnInit } from '@angular/core';
import { ICatogary } from '../shared classes and types/interface ICatogary';
import { IProduct } from '../shared classes and types/interface IProduct';
import { DiscountOffers } from '../shared classes and types/Enum DisscountOffers';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { 
this.Discount = DiscountOffers['noDiscount'];
this.ProductList = {
  ID:1,
  Name:"tee",
  Quantity:3,
  Price:30,
  Img:"assets/images/card1.jpg",
}
this.CatogaryList = {
  ID:2,
  Name:"mm"
}
this.Storename="liza";
this.StoreLogo="assets/images/card1.png";
this.Clientname="omnia";
this.Ispushased=true;
  }
Discount:DiscountOffers;
Storename:string;
StoreLogo:string;
Clientname:string;
Ispushased:boolean;
 ProductList:IProduct;
 CatogaryList:ICatogary;
  ngOnInit(): void {
  }

}
