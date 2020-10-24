import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BlogComponent} from  './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelBookedComponent } from './travel-booked/travel-booked.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [

  {
    path: "",component: HomeComponent
  },
  {
    path:"blog",component: BlogComponent
  },
  {
    path:"travels", component: TravelsComponent
  },
  {
    path:"products/:productId", component: TravelBookedComponent
  },
  {
    path: 'cart', component: CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
