import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  @ViewChild(ProductComponent) child?: ProductComponent;
  ngAfterViewInit(){
    this.child?.renderValues();
  }
  title = 'firstproj';
}
