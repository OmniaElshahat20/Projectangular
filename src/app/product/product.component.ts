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
this.Discount= DiscountOffers.pres_10;
this.no=DiscountOffers.Nodis;
// this.ProductList = {
//   ID:1,
//   Name:"tee",
//   Quantity:3,
//   Price:30,
//   Img:"assets/images/card1.jpg",
// }
// this.CatogaryList = {
//   ID:2,
//   Name:"mm"
// }

this.Storename="liza";
this.StoreLogo="assets/images/card1.png";
this.Clientname="omnia";
this.Ispushased=true;
  }
Discount:DiscountOffers;
Storename:string;
StoreLogo:string;
Clientname:string;
no:DiscountOffers;
Ispushased:boolean;
 //ProductList:IProduct;
 //CatogaryList:ICatogary;
 CategoryLst:Array<ICatogary>=[
  {ID:1,Name:"clothes"},
  {ID:1,Name:"clothes"},
  {ID:1,Name:"clothes"},
 ]

ProductLst:Array<IProduct>=[
  {ID:1,Name:"Dress",Quantity:12,Price:200,Img:"assets/images/card1.png"},
  {ID:2,Name:"Dress",Quantity:12,Price:200,Img:"assets/images/card1.png"},
  {ID:3,Name:"Dress",Quantity:12,Price:200,Img:"assets/images/card1.png"}
];
ClientName:any="";
  ngOnInit(): void {
  }

}
