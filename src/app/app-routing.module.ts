import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { ContactComponent } from './body/contact/contact.component';
import { FoodComponent } from './body/food/food.component';
import { AboutComponent } from './body/about/about.component';
import { CartComponent } from './body/cart/cart.component';
import { FinalizareComandaComponent } from './finalizare-comanda/finalizare-comanda.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'food',
    component: FoodComponent,
    // children: [{ path: ':id', component: FoodComponent }],
  },
  { path: 'food/:id', component: FoodComponent },
  { path: 'cart', component: CartComponent },
  { path: 'completeOrder', component: FinalizareComandaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
