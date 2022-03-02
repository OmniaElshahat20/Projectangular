import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ProductList:any;
  isClicked:boolean=false;
  
  @ViewChild(ProductComponent) child?: ProductComponent;
       display(){
       this.child?.renderValues();
       this.ProductList=this.child?.ProductList??[];
    
    if(!this.isClicked)
    this.isClicked=true;
    else
    this.isClicked=false;
    
      }

  
  title = 'firstproj';
}
