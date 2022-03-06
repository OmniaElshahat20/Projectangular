import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
