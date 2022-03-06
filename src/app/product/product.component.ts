import { Component, OnInit } from '@angular/core';
import { ICatogary } from '../shared classes and types/interface ICatogary';
import { IProduct } from '../shared classes and types/interface IProduct';
import { DiscountOffers } from '../shared classes and types/Enum DisscountOffers';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

constructor(private productservice:ProductServiceService , private router:Router ) 
{ 
this.Discount= DiscountOffers.pres_10;
this.nod=DiscountOffers.Nodis;

this.ProductList = [
  {ID:1,Name:"Dress",Quantity:12,Price:200,Img:"assets/images/card1.png"},
  {ID:2,Name:"Dress",Quantity:12,Price:200,Img:"assets/images/card1.png"},
  {ID:3,Name:"Dress",Quantity:12,Price:200,Img:"assets/images/card1.png"}
]

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
nod:DiscountOffers;
Ispushased:boolean;
ProductList:IProduct[];
 //CatogaryList:ICatogary;
 CategoryLst:Array<ICatogary>=[
  {ID:1,Name:"clothes"},
  {ID:1,Name:"clothes"},
  {ID:1,Name:"clothes"},
 ]
 showanottable(){
  this.Ispushased = !this.Ispushased
 }
 ProductID:any;
  ngOnInit(): void {
    this.ProductList=this.productservice.GetAllProducts();
    this.ProductID=this.productservice.GetProductById(2);
  }

  renderValues(){
    return this.ProductList=this.productservice.GetAllProducts();
  }
  navigate() {
    this.router.navigate(["/product"]);
  }
  navigate2() {
    this.router.navigate(["/product"]);
  }
}
