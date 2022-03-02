import { Injectable } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../shared classes and types/interface IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductList = [
    {ID:1,Name:"Dress",Quantity:12,Price:200,Img:"assets/images/card1.png"},
    {ID:2,Name:"Dress",Quantity:13,Price:300,Img:"assets/images/card1.png"},
    {ID:3,Name:"Dress",Quantity:14,Price:400,Img:"assets/images/card1.png"}
  ]
  constructor() { }
  GetAllProducts(){
    return this.ProductList ;
  }

 ProductListID:any;

  GetProductById(id:any) {

    if(typeof id != 'number')
    {
      return null;
    }
    else{
      this.ProductList.filter((k)=>{
        if(k.ID===id){
         this.ProductListID=k;
        }
      });
      return this.ProductListID;
    }
  }
}
